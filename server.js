const express = require('express');

const routes = require('./routes/tea'); // import the routes
const mongoose = require('mongoose'); // import mongoose
const dotenv = require('dotenv').config();

const app = express();

//Database credentials
const username = "jamjohnson";
const password = "sta78726486";
const cluster = "cluster0.ou3dk";
const dbname = "tea-app-app";

app.use(express.json()); // parses incoming requests with JSON payloads
//establish connection to database

app.use('/', routes) // to use the routes


mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('your App is listening on port ' + listener.address().port)
});
