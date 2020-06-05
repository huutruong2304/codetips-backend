const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routerPost = require('./routes/post')

const app = express();

const PORT = process.env.PORT || 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// enable cors for all requests
app.use(cors());

// set our apis route
app.use('/api', [routerPost]);

// return orther routes to Anular index file..
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'dist/codetips/index.html'));
    res.redirect("http://localhost:4200/")
})

app.listen(PORT, () => {
    console.log('Server is up to port ' + PORT);
})