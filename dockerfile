FROM node:20
WORKDIR /
COPY . .
RUN npm i
CMD ["node", "index.js"]