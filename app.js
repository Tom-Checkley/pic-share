const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  config = require('./config/database'),
  multer = require('multer');

/*
 *		DATABASE
 */

// Connect to MongoDB 
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});


/*
 *		APP
 */

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid End Point');
});

// catch incorrect paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(3000, () => {
  console.log('App listening on port ' + port);
});