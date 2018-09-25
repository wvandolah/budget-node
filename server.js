const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport')
require('dotenv').config();
const routes = require('./routes');



require('./auth/jwt')
require('./auth/google')

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(passport.initialize());

server.use('/api', routes);






module.exports = {
    server
};