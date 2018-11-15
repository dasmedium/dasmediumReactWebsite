FROM node:10 as build
# Create app directory
#RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json ./

RUN npm install 

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
RUN npm run build

FROM nginx:1.15.6
COPY --from=build /usr/src/app/src/build /usr/share/nginx/html

EXPOSE 80

