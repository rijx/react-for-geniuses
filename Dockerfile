# Build the application
FROM node:12-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Build the final image
FROM nginx:1.17-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
