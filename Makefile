local:
	cd ui && yarn
	cd ui && yarn build
	cd ui && cp -r ./dist ../dist
	go build -o tlqs-bin
	./tlqs-bin

container:
	docker-compose build
	docker-compose up -d

rm-local:
	rm -r ./dist
	rm ./tlqs-bin

rm-container:
	docker-compose down

