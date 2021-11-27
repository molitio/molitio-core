# syntax=docker/dockerfile:1.0

FROM node:14-alpine AS init

WORKDIR /src

COPY package*.json /src/
COPY . /src

RUN npm install

FROM init as build

RUN npm run build

#CMD [ "node", "listFiles.js" ]
FROM build as prduction

COPY --from=init /src/package*.json .
COPY --from=build /src/dist .

ENV NODE_ENV=prduction

RUN npm install --production

EXPOSE ${PORT}
CMD [ "node", "dist/api.js" ]


