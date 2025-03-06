// Required dependencies
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const app = express();


// Dotenv package
require('dotenv').config();

// Port number
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static('public'));


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Songs API
app.get('/api/mp3/:title', (req, res) => {
    res.sendFile(path.resolve(__dirname, './api/mp3', `${req.params.title}.mp3`));
})


// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    console.log('env: ', process.env.NODE_ENV);
});