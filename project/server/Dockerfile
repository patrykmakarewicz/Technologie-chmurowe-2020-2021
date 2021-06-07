FROM node:latest
WORKDIR /server
COPY package*.json /server
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]