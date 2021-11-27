FROM node:14.15.1-alpine3.10
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .

CMD ["node", "api.js"]