var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))
const bodyParser = require('body-parser')
app.use(bodyParser.json());

console.log(__dirname)
console.log(__dirname)
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

var AYLIENTextAPI = require('aylien_textapi');
app.post('/sentiment', (req, res) => {
    var textapi = new AYLIENTextAPI({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    console.log('in sentimetn with body ' , req.body)
    textapi.sentiment({
        'text': req.body.message
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            res.send(JSON.stringify(response));
        }
    });

})