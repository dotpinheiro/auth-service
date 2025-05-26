FROM node:22-alpine

WORKDIR /app

COPY view/apps/admin-ui/package.json .

RUN yarn install

COPY view/apps/admin-ui/ .

EXPOSE 3000

CMD ["npm", "start"]
