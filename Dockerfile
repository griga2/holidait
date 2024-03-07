FROM node:latest as builder

WORKDIR /usr/src/app

COPY . ./

FROM builder as dev
CMD ["npm", "run", "build"]

FROM builder as prod-builder
RUN npm run build

FROM nginx:latest as prod

COPY --from=prod-builder /usr/src/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]