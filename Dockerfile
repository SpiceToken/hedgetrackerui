FROM node:latest

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install
RUN npm install -g nuxt
RUN npm install apexcharts
RUN npm install vue-apexcharts
RUN npm install vue-native-websocket

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
# RUN nuxt build
# RUN NODE_ENV=production npm run build
# ENV NODE_ENV production
RUN npm run build

EXPOSE 3000
CMD [ "nuxt", "--hostname", "0.0.0.0", "--port", "3000" ]
