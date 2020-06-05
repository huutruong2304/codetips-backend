// mongodb+srv://user234:<password>@cluster0-4tl1d.mongodb.net/test?retryWrites=true&w=majority

const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://user234:12345@cluster0-4tl1d.mongodb.net/codetips?retryWrites=true&w=majority';
// const mongoUrl = 'mongodb://localhost/codetips'

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log('Connection error');
    }
})