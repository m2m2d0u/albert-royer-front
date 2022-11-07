FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
RUN yarn global add @vue/cli@4.1.2
RUN npm install -g npm@8.13.2

COPY . .
RUN npm run build-dev

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
