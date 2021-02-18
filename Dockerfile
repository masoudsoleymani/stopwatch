FROM node:14.15-alpine

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
