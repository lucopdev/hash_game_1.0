FROM node:16.14-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "ace", "serve", "--watch"]