const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
	if (stripeErr) {
		res.status(500).send({ error: stripeErr });
	} else {
		res.status(200).send({ success: stripeRes });
	}
}

const paymentApi = app => {
	app.get('/', (req, res) => {
		res.send({ message: 'Hello Stripe Checkout Server!', timestamp: new Date().toISOString() })
	});

	return app;
};

module.exports = paymentApi;
