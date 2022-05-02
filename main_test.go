package main

import (
	"fmt"
	"log"
	"os"
	"testing"

	"github.com/ory/dockertest"
	"github.com/ory/dockertest/docker"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
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
	resource.Expire(120)

	hostAndPort := resource.GetHostPort("5432/tcp")
	dbURL := fmt.Sprintf("postgres://tlqs:tlqs@%s/tlqs?sslmode=disable", hostAndPort)

	if err := pool.Retry(func() error {
		Database, err = gorm.Open(postgres.Open(dbURL), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Silent),
		})
		if err != nil {
			return err
		}

		db, err := Database.DB()
		if err != nil {
			log.Fatal(err)
		}
		return db.Ping()
	}); err != nil {
		log.Fatalf("Could not connect to Docker: %s", err)
	}

	Database.AutoMigrate(User{})
	Database.AutoMigrate(Session{})
	Database.AutoMigrate(Course{})
	code := m.Run()

	if err := pool.Purge(resource); err != nil {
		log.Fatal(err)
	}

	os.Exit(code)
}
