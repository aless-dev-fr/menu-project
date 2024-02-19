FROM node:lts AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY startup.sh /usr/local/bin/startup.sh

RUN chmod +x /usr/local/bin/startup.sh

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/startup.sh"]