run:
	cd ui && yarn
	cd ui && yarn build
	cd ui && cp -r ./dist ../dist
	go build -o tlqs-bin
	./tlqs-bin

clean:
	rm -r ./dist
	rm ./tlqs-bin
