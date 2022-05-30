FROM node:12.22.7-buster

WORKDIR /usr/web

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn start

EXPOSE 3001


