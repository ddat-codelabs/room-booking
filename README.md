Room Bookings
=============

This is a Node.js/Express/MongoDB application for making room bookings.

It uses the **Express** web framework, and stores information about bookable rooms and bookings in a **MongoDB** database.

It uses the **EJS** templating language in its view files.

Installation
------------

To install and run this app, first make sure you have Git, Node.js and NPM installed. You can check this by typing `node -v`, `npm -v` and `git --version`.

You also need to make sure that the environment variable `MONGODB_URI` is set to the connection string of a running MongoDB database, on the internet or on your own machine. The app won't be able to launch unless it can talk to a database.

* Go to your terminal and make a copy of the code with the `git clone` command.
* Navigate into the folder you have cloned by typing `cd room-booking`.
* Next, install dependencies by typing `npm install`. This will read from your package.json file.
* Once that's complete, you can start the app up by typing `npm start`.

You'll be able to visit the app in your browser by typing `localhost:4000` in your address bar.
