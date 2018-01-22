[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Cherri 樱桃

## Coder Academy Node / React.js Project By Golden Lucky Dragon (Carmen Chung, Jon Ablondi and James Marotta).

TODO : update ENV For backend FRONT_END_URL

## TABLE OF CONTENTS

[INSTALLATION INSTRUCTIONS](#installation)

[OVERVIEW](#overview)  

[BUSINESS PROBLEM](#businessproblem)

[BUSINESS SOLUTION](#businesssolution)

[PROJECT PLANNING](#businesssolution)
* [User Stories](#userstories)
* [Workflow Diagram & Project Plan](#workflow)
* [Wireframes](#wireframes)
* [Entity Relationship Diagram (ERD)](#erd)

[TOOLS & METHODOLOGIES](#tools)

[KEY FEATURES](#keyfeatures)

[FURTHER WORK](#furtherwork)


---
<a name="installation"/>
### 1. Installation Instructions
</a>

To use this project locally:

```
$ git clone https://github.com/GoldenLuckyDragon/Cherri.git
```
Move into the directory:  
```
$ cd Cherri
```
The project consists of both a front and back end. To begin with, you will need a stripe account. Go to  https://dashboard.stripe.com/register
and register an account. In the Stripe dashboard, sign up for Stripe Connect (which allows the platform to be a middleman in a transaction between two clients).

Once you have a Stripe account, register your platform here:
https://dashboard.stripe.com/account/applications/settings

Important Note: you must verify your identity on Stripe for Stripe Connect to accept payments.

In Terminal, move into the backend folder and create a dotenv file that will host your environment variables.

```
$ cd backend && touch .env
```

Copy and paste the following inside the dotenv file:
```
STRIPE_DEV_SECRET=
CLIENT_ID=

```
Fill in your Client ID from your Stripe dashboard under Settings (and keep your dashboard open, as it will be used again).

Update your modules with the following command in Terminal:
```
$ yarn install
```
Stripe requires a handshake verification process which must be done over https and cannot be done on localhost. As such, download and install ngrok from
https://ngrok.com/download (which will facilitate the handshake verification).

Move to the download directory with the following Terminal command:

```
  cd [PATH TO NGROK - likely to be "/downloads"]
```
and run the following command to create a secure public connection to your localhost:
```
 $ ngrok http 8080
```
![ngrok](/backend/public/ngrok.png)

Then copy the https url and go back to your Stripe dashboard. There will be a new redirect_URI on the bottom left of the dashboard. Select "Viewing test data" as per below:

![test_data](backend/public/test_data.png)

Go to your dashboard - when you add your redirect_URI, make sure to add the following to the end of your ngrok https url:

```
/users/auth/stripe_connect
```

It might look something like this:
```
https://2221ajecb.ngrok.io/users/auth/stripe_connect

```

Then click on "API" on the left of the dashboard and save both your stripe secret key to your new .env file. The dashboard should look like this:

![redirect](backend/public/redirect.png)

Keep Terminal open inside the /backend folder
and run:
```
$ yarn start
```
You should see:
 ```
 Server running on port: 8080
 Successful connection to MongoDB
 ```

If you do not already have MongoDb, you will need to install it with the following steps.

---
#### MongoDb

Open a new Terminal window with <kbd>CMD</kbd> + <kbd>T</kbd>

We use MongoDb - with this project you can install it using Homebrew.

You can find the MongoDb docs [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

First update your homebrew with the following:

```
$ brew update
```

Then run:
```
$ brew install mongodb
```
Once the installation is complete, run:

```
$ mongod --dbpath /usr/local/var/mongodb
```

A successful connection will display as follows:
```
waiting for connections on port 27017
```

---

#### Front End

Open a new Terminal window (keep the other windows open) by pressing
 <kbd>CMD</kbd>  + <kbd>T</kbd>

Now type:
```
$ cd ..
```
to go back a folder and then:
```
$ cd frontend
```
to move to the front end folder.

Make a new .env file by entering in Terminal:

```
$ touch .env
```

and copy the following inside:

```
REACT_APP_STRIPE_DEV_PUBLISH=
REACT_APP_SERVER_URL=http://localhost:8080
```
Fill in the STRIPE_DEV_PUBLISH with your test publishable key from your stripe dashboard; then run:
```
$ yarn install
```

You should have 3 terminal windows running:

*1.* Cherri/backend.

*2.* Mongodb.

*3.* Cherri/frontend.

Type into Terminal:
```
$ yarn start
```
to start the website.

---
---
### Linter  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

We chose to use the following Linter: https://standardjs.com/

It is well documented, it has auto enforcement on save and it works with es6. Controversially, it removes semicolons, but this appears to be becoming standard practice in the industry. As a result, you can never start a line with (, [, or `.
