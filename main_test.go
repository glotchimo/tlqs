package main

import (
	"fmt"
	"log"
	"os"
	"testing"

	"github.com/ory/dockertest"
	"github.com/ory/dockertest/docker"
)

func TestMain(m *testing.M) {
	pool, err := dockertest.NewPool("")
	if err != nil {
		log.Fatal(err)
	}

	resource, err := pool.RunWithOptions(&dockertest.RunOptions{
		Repository: "postgres",
		Tag:        "latest",
		Env: []string{
			"POSTGRES_USER=tlqs",
			"POSTGRES_PASSWORD=tlqs",
			"POSTGRES_DB=tlqs",
			"listen_addresses = '*'",
		},
	}, func(config *docker.HostConfig) {
		config.AutoRemove = true
		config.RestartPolicy = docker.RestartPolicy{Name: "no"}
	})
	if err != nil {
		log.Fatal(err)
	}

	hostAndPort := resource.GetHostPort("5432/tcp")
	os.Setenv("DATABASE_URL", fmt.Sprintf("postgres://tlqs:tlqs@%s/tlqs?sslmode=disable", hostAndPort))

	resource.Expire(120)
	InitDatabase()
	code := m.Run()

	if err := pool.Purge(resource); err != nil {
		log.Fatal(err)
	}

	os.Exit(code)
}
