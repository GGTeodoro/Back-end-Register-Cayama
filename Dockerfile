FROM node:13.12.0-alpine as build

WORKDIR /usr/app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . /usr/app

EXPOSE 8001
CMD ["npm", "start"]