# develop stage
FROM node:16-alpine as develop-stage
ARG VERSION
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm version $VERSION
RUN yarn install
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
