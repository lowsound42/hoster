const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/plans.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/registration.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + '/pages/404.html'));
});

app.listen(port, () => {
    console.log('ahoy matey at port', port);
});
