FROM node:alpine3.17

# RUN curl -sL https://deb.nodesource.com/setup_5.x
# RUN apt-get install -y nodejs

WORKDIR /node
COPY package.json ./

RUN npm install
WORKDIR /node/app
COPY . .

CMD ["npm", "run", "dev"]
