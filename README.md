## Use examples

First of all run `npm install`

```
$ npm install -g ts-node typescript
$ npm run serve
```
This will start up the server and you can use the example

If you want to run the unit tests, simply use `npm test test/**/*.spec.ts`

To run alle tests simply run `npm run test:all`

# Example using MongoDB

## General information

In the `utils/mongodb` folder is a class called `client. ts`. This class is used as a general wrapper for finding, inserting, updating and deleting entries. It´s not a replacement for all MongoDB actions.

One of the features is that during testing the MongoDB client gets replaced by a mock class. The reason for this is, that when we tests our routers (with inversify controller) we really only want to test the routers and not if the MongoDB client successful writes something in the database. For testing the MongoDB client, we have an extra test that and only that builds up a database connection.

## Used Middleware

Middleware                                              | Reason
------------------------------------------------------- | --------------------------------------------------------------------------------------------------------
[body-parser](https://github.com/expressjs/body-parser) | We need to access the body of a request
[helmet](https://github.com/helmetjs/helmet)            | Adds some protection to the application and removes things like the `X-Powered-By header` from a request


MongoDB installation process: https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/
