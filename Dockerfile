FROM node:14
LABEL maintainer Kartik Punekar

COPY . /simple-websocket-server

WORKDIR /simple-websocket-server

RUN npm install

EXPOSE 6363

CMD ["npm", "start"]

