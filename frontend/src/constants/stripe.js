const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_live_MY_PULISHABLE_KEY'
: 'pk_test_NFY6Z1CUbyh0azAZ0eHCfBpb';

export default STRIPE_PUBLISHABLE;
