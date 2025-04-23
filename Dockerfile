FROM selenium/node-chrome
WORKDIR /app
ADD . /app

RUN npm install

CMD npx wdio


