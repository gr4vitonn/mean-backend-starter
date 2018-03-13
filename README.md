# inversify-express-example

[![Travis](https://img.shields.io/travis/inversify/inversify-express-example.svg?style=flat-square&label=Travis)](https://travis-ci.org/inversify/inversify-express-example)
[![Dependencies](https://david-dm.org/inversify/inversify-express-example.svg)](https://david-dm.org/inversify/inversify-express-example#info=dependencies)
[![img](https://david-dm.org/inversify/inversify-express-example/dev-status.svg)](https://david-dm.org/inversify/inversify-express-example/#info=devDependencies)
[![img](https://david-dm.org/inversify/inversify-express-example/peer-status.svg)](https://david-dm.org/inversify/inversify-express-example/#info=peerDependenciess)

>The official express + inversify + inversify-express-utils example

## Use examples

First of all run `npm install`

You can start a example by using `ts-node` 
```
$ npm install -g ts-node
$ ts-node <example>/bootstrap
```
This will start up the server and you can use the example

If you want to run the unit tests, simply use `npm test <example>/**/*.spec.ts`

To run alle tests simply run `npm run test:all`

## Currently available examples

Name    | Description
------- | -------------------------------------------------------------------------------------------------------------------------------
Basic   | A really basic example. Nothing to fancy.
MongoDB | Similar to the basic example. This time with MongoDB and some middleware. For detailed information see the readme in the folder.
BindingDecorators | Similar to the basic example. This time with inversify-binding-decorators.
MiddlewareInjection | A small example that shows how to inject middleware into controllers.
PostgresAndTypeORM | A small example that shows how to integrate inversify-express-utils with TypeORM.






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
