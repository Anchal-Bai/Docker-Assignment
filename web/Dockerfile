FROM node:18

WORKDIR /app
COPY . .

RUN npm install

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl --fail http://localhost:3000 || exit 1

EXPOSE 3000

CMD ["npm", "start"]
