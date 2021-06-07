FROM node:latest AS builder
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder ./client/build /usr/share/nginx/html
EXPOSE 80