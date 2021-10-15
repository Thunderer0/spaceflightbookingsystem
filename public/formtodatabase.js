//Import the mongoose module
var mongoose = require('mongoose');
var express = require('express');
const internal = require('stream');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/project';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



var date1 = document.getElementById('date').value;
var rocket1 = document.getElementById('rocket').value;
var from1 = document.getElementById('from').value;
var to1 = document.getElementById('to').value;
var nos1 = document.getElementById('nos').value;
var bs1 = document.getElementById('bs').value;
var price1 = document.getElementById('price').value;




const kittySchema = new mongoose.Schema({
    date: String,
    rocket: String,
    from: String,
    to: String,
    seats: Number,
    booked: Number,
    price: Number
});

var Kitten = mongoose.model('Kitten', kittySchema);
var harryKitten = new Kitten({
    date : date1,
    rocket : rocket1,
    from : from1,
    to : to1 ,
    seats : nos1,
    booked : bs1,
    price : price1
});
harryKitten.save(function (err, harryKitten) {
    if (err) return console.error(err);
});