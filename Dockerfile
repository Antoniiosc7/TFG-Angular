FROM node:18.10 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]

#CMD ["nohup", "ng", "serve", "--host", "192.168.0.104", "--port", "4200", "&"]
