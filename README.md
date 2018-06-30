# ToDo List API

## Requirements

NodeJS
```
brew install node
```
To test if the install worked, try to install grunt:
```
npm install -g grunt-cli
```

Heroku CLI: [Set Up Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

## Setting up the node js server

Create a package.json file
```
npm init
```
Package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies. `npm init` will prompt you to enter some information such as the app name, description, version, author, keyword and also ask if what you see is what you like.

Let's install express and nodmon, express will be used to create the server while nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server.

```
npm install --save-dev nodemon
npm install express --save
```

## Setting up the node js server with basic authorization

We need the basic auth package.
```
npm install express-basic-auth
```
## How to deploy locally

Execute:
```
npm run start
```

## How to deploy in Heroku

Link your Heroku app to your repository and then from the root folder of the repository push the subfolder containing the server code:

```
git subtree push --prefix api-server origin deploys_heroku
```

## References
- [Build Node.js RESTful APIs in 10 Minutes](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
- [REST Tutorial](https://github.com/miguelgrinberg/REST-tutorial)
