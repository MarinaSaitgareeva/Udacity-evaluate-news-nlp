// Use the dotenv package to use environment variables (for the MeaningCloud API key)
const dotenv = require('dotenv');
dotenv.config()

// Require the library MeaningCloud
var MeaningCloud = require('meaning-cloud');

// Declare the MeaningCloud API credentials
var meaning = MeaningCloud({
    // API Key. Required.
    key: process.env.API_KEY,
    // HTTPS or HTTPS. Optional, true by default.
    // secure: true,
    // URI to create the API endpoints. Optional.
    // uri: 'custom-uri'
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
app.use(bodyParser.urlencoded({ extended: false })); // to use url encoded values
app.use(bodyParser.json()); // to use json

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Setup Server
const port = 8080;

// Designates what port the app will listen to for incoming requests
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


// GET route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
})

// POST route
app.post('/urlEvaluate', async(req, res) => {
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + process.env.API_KEY + '&txt=' + req.body.text + '&lang=en');
    try {
        // data equals to the result of fetch function
        const data = await response.json();
        console.log(data);
        res.send(data);
    } 
    catch (error) {
        // appropriately handle the error
        console.log('error', error);
    }
});


app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
})

