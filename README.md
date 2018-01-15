[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Cherri 樱桃

## By Golden Lucky Dragon

  #### Coder Academy Sydney
  ####Final Project
  #####by Carmen Chung, Jon Ablondi and James Marotta.



---
###Installation Instructions

  To use this project locally first

```
git clone https://github.com/GoldenLuckyDragon/Cherri.git
```
Then change into the directory  
```
cd Cherri
```
The project is in front and backend lets set up the backend first

you will need a stripe account goto https://dashboard.stripe.com/register
register for an account and in the dashboard sign up for connect.

Stripe connect allows the platform to be a middleman between a transaction of two clients.

Once you have a stripe account register your platform here
https://dashboard.stripe.com/account/applications/settings

now run

```
touch .env
```
this will create a dotenv file we can save our environment variables inside.

copy and paste the following inside
```
STRIPE_DEV_SECRET=
CLIENT_ID=

```
fill in your Client ID from your stripe dashboard under settings.

Keep the dashboard open as you will need it again.

 update your modules with
```
yarn install
```
Stripe requires a handshake verification process which must be done over https and cannot be done on localhost.



we will use Ngrok to overcome this
https://ngrok.com/download

download and install ngrok, cd to the download directory and run

```
ngrok http 8080
```

this creates a secure public connection to your localhost

![backend/public/ngrok.png](ngrok)

copy the https url and go back to your dashboard
and it as a new redirect_URI

on the bottom left of the dashboard make sure you select test data

![backend/public/test_data.png](test_data)

add your redirect_uri and make sure to add

```
/users/auth/stripe_connect
```
to the end of your ngrok https url.

it might look something like this

```
https://2221ajecb.ngrok.io/users/auth/stripe_connect

```

now goto click on API on the left of the dashboard and save both your stripe secret key to your new .env file




---
### linter
  we chose to use https://standardjs.com/rules.html#semicolons
  It is well documented, it has auto enforcement on save and it works with es6.

  Controversally it removes semicolons but we figure this to be they way of the future anyway.
  Because of this, you can: Never start a line with (, [, or `

  We have it enabled to force fix on save and when we run tests.
