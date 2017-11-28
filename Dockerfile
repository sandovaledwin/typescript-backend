FROM node:8.9.1

LABEL authors="Edwin Sandoval <sandovaledwin@hotmail.com>"

EXPOSE 3000

RUN npm install -g ts-node
RUN npm install -g typescript
