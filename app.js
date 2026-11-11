var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const connectionString = process.env.MONGO_CON;
var mongoose = require('mongoose');
mongoose.connect(connectionString);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));
db.once("open", function(){
  console.log("Connection to MongoDB Successful");
})

var SeaCreature = require("./models/seaCreature");

async function recreateDB(){
  await SeaCreature.deleteMany();
  let instance1 = new SeaCreature({ 
    "name": "Dumbo Octopus",
    "genusName": "Grimpoteuthis",
    "numberOfTeeth": 0, 
    "isVertebrate": false, 
  });
  instance1.save().then(doc=>{
    console.log("First object saved");
  }).catch(err=>{
    console.log(err);
  });
  let instance2 = new SeaCreature({ 
    "name": "Orca",
    "genusName": "Orcinus",
    "numberOfTeeth": 20,
    "isVertebrate": true,
  });
  instance2.save().then(doc=>{
    console.log("Second object saved");
  }).catch(err=>{
    console.log(err);
  });
  let instance3 = new SeaCreature({ 
    "name": "Sea Lamprey",
    "genusName": "Petromyzon",
    "numberOfTeeth": 100,
    "isVertebrate": true, 
  });
  instance3.save().then(doc=>{
    console.log("Third object saved");
  }).catch(err=>{
    console.log(err);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var seaCreatureRouter = require('./routes/seaCreature');
var gridRouter = require('./routes/grid');
var randomitemRouter = require('./routes/randomitem');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/seaCreature', seaCreatureRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', randomitemRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
