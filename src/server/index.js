// Use the dotenv package to use environment variables (for the MeaningCloud API key)
const dotenv = require('dotenv');
dotenv.config();

// Require the library MeaningCloud
var MeaningCloud = require('meaning-cloud');

// Declare the MeaningCloud API credentials
var meaning = MeaningCloud({
    key: process.env.API_KEY // API Key. Required.
    secure: true             // HTTPS or HTTPS. Optional, true by default.
    uri: 'custom-uri'        // URI to create the API endpoints. Optional.
  });

// Require path to provide a way of working with directories and file paths
var path = require('path');

const mockAPIResponse = require('./mockAPI.js');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware */
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Setup Server
const port = 8080;

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


// GET route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

