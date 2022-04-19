run:
	yarn --cwd ui/ install
	docker-compose build
	docker-compose up

run-background:
	yarn --cwd ui/ install
	docker-compose build
	docker-compose up -d

clean:
	docker-compose down -v
	rm -rf ui/node_modules ui/dist

clean-all:
	docker-compose down -v
	docker system prune
	rm -rf ui/node_modules ui/dist
