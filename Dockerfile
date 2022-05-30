FROM node:12.22.7-buster

WORKDIR /usr/web-playlistmaker

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]




