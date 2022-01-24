const express = require('express');

const routes = require('./routes/tea'); // import the routes
const mongoose = require('mongoose'); // import mongoose
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

app.use('/', routes) // to use the routes

app.use('/uploads', express.static('./uploads'));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('your App is listening on port ' + listener.address().port)
});
