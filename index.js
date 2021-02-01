require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const httpFactory = require('./http');
const routes = require('./routes');

const app = httpFactory(express, routes, cors, bodyParser);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`listen on port: ${PORT}`));
