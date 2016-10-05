'use strict';

const express = require('express');
const {makeRedirectMiddleware} = require('./middlewares/redirects');

const redirectsMap = require('./redirects.json');

const app = express();

app.use(makeRedirectMiddleware(redirectsMap));

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/index.html` ));
app.get('/new-url-1', (req, res) => res.send('new-url-1'));
app.get('/new-url-2', (req, res) => res.send('new-url-2'));

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
