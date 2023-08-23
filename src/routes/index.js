const express = require('express');
const route = express.Router();

const v1Routes = require('./v1');

route.use('/v1', v1Routes);

module.exports = route;// must be done as we are using const apiRoute = require('./routes') , in index.js in src