// Use the dotenv package to use environment variables (for the MeaningCloud API key)
const dotenv = require('dotenv');
dotenv.config()

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

// Require cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Require module node-fetch to use the fetch() function in NodeJS
// const fetch = require('node-fetch');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Setup Server
const port = 8080;

// Designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


// GET route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


// Personal API Key for API MeaningCloud
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY;
const lang = '&lang=auto';
const type = '&url=';


// POST route (request API MeaningCloud)
app.post('/apiData', async(req, res) => {
    const apiResult = await fetch(baseURL + apiKey + lang + type + req.body.url);
    try {
        // data equals to the result of fetch function
        const data = await apiResult.json();
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