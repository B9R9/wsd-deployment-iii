FROM denoland/deno:alpine-1.42.2

EXPOSE 7777

WORKDIR /app

COPY . .

CMD [ "deno", "run", "--allow-net","--allow-read","--allow-env", "--watch", "--unstable", "app.js" ]