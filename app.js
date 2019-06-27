const express = require('express');
const mongoose = require('mongoose');

const app = express();
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');

app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

//  MongoDB connection

mongoose.connect('mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(app.get('port'), () => {
    console.log(`API Server Listening on port ${app.get('port') }!`);
  });
});
