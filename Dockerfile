FROM node:21.1.0-alpine 

WORKDIR /app
ADD package.json /app
RUN yarn
RUN yarn build
CMD "yarn preview"