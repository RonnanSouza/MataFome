const Meal = require('../models/Meal.js');

module.exports = {
  async index(req, res) {
    console.log("hey")
    const meals = await Meal.find();
    return res.json(meals);
  },
  async store(req, res) {
    console.log("hey")
    const { name, description, value } = req.body;
    var orders = await Meal.find({
      name: name,
      description: description,
      value: value
    })

    if (orders.length > 0) {
      return res.json({
        message: 'This Meal already exists'
      })
    }
    const meal = await Meal.create({
      name,
      description,
      value
    })
    return res.json(meal)
  },
}