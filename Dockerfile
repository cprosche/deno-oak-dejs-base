FROM denoland/deno:alpine-1.21.0
WORKDIR /app
USER deno
COPY utils ./utils
COPY routes.js .
COPY server.js .
RUN deno cache server.js
COPY . .
EXPOSE 3000
CMD ["deno", "task", "start"]
# docker build -t deno-app . && docker run --init -p 3000:3000 deno-app