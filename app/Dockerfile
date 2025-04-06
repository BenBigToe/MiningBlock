FROM node:18-alpine
RUN apk add --no-cache git python3 make g++ sqlite netcat-openbsd
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN adduser -D miningblock && \
    chown -R miningblock:miningblock /app && \
    mkdir -p /data/miningblock && \
    chown -R miningblock:miningblock /data/miningblock
USER miningblock
EXPOSE 3333 3000
HEALTHCHECK --interval=30s --timeout=5s CMD nc -z localhost 3000 || exit 1
CMD ["sh", "start.sh"]