FROM node:14
WORKDIR /usr/src/my_node_appr
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]