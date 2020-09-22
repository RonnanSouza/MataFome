const express = require('express');
const mongoose = require('mongoose');
const mealRoute = require('./routes/MealRoute');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

mongoose.connect('mongodb://root:example@127.0.0.1:27017/').then(
  () => {
    console.log("conencted!")
  },
  error => {
    console.log(error)
  }
);

app.use(express.json());
app.use('/meal', mealRoute);

app.use(function (req, res, next) {
  next(createError(404));
});


app.listen(PORT, HOST)