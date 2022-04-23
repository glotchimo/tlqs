FROM node:lts as node_setup
WORKDIR /root/
COPY ./ui/package.json ./
COPY ./ui/yarn.lock ./
RUN yarn install
COPY ./ui/ ./
RUN yarn build

FROM golang:alpine as go_setup
RUN apk update && apk add --no-cache git
ADD . /go/src/github.com/sr-internal-systems/tlqs
WORKDIR /go/src/github.com/sr-internal-systems/tlqs
RUN go get -d .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root
COPY --from=node_setup /root/dist /root/dist
COPY --from=go_setup /go/src/github.com/sr-internal-systems/tlqs/app /root/app
CMD ["./app"]
