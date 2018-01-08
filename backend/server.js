// cors allows you to talk to yourself from two differnt localports;

const cors = require('cors');
const bodyParser = require('body-parser');

// whitelist our ports for the front end
const CORS_WHITELIST = require('./constants/frontend');

// dynamic origin (based on production vs dev env)
const corsOptions = {
	origin: (origin, callback) =>
	// not 100% sure of this sentence, the non negative index confuses me.
	  (CORS_WHITELIST.indexOf(origin) !== -1)
		  ? callback(null, true)
			: callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
	app.use(cors());

	app.use(bodyParser.json());
};

module.exports = configureServer;
