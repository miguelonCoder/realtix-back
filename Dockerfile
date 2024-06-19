FROM node:21-alpine3.17

VOLUME [ "/static" ]
WORKDIR /usr/src/app
COPY package*.json tsconfig*.json ./
RUN npm i -g pnpm
RUN pnpm install --no-frozen-lockfile
COPY src/ src/
RUN npm run build
RUN rm -r src
CMD ["npm", "run", "start:prod"]