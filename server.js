const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BeltDB', {useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static( __dirname + '/public/dist/public' ));

require('./Server/Routes/routes')(app);


app.listen(8000, () => console.log("listening on port 8000"));