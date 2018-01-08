const express = require('express');

const SERVER_CONFIG = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIG.PORT, error => {
	if (error) throw error;
	console.log('Server running on port: ' + SERVER_CONFIG.PORT);
});
