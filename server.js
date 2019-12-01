const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// mongoDB config
const db = require('./setup/myurl').mongoURL

// Connect to Database

mongoose
    .connect(db)
    .then(() => {
        console.log('Connection Sucessful');
    })
    .catch( (error) => {
        console.log(error);
    })
    
//Route
app.get('/',(req,res) => {
    res.send('Hey there Mongo db Project');
});

app.listen(port,() => {
    console.log(`Server is running at Port : ${port}`);
});
