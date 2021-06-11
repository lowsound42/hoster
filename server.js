/* 
  WEB322 Assignment 1
  Name: Omar Khan
  Student Number: 132197203
  Email: okhan27@myseneca.ca
  Section NCC
  Date: 10/6/2021 
  All the work in the project is my own except for stock photos, icons, and bootstrap files included
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/index.html'));
});

app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/plans.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/login.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/registration.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + '/static/html/404.html'));
});

app.listen(port, () => {
    console.log('ahoy matey at port', port);
});
