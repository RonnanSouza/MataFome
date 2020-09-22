const { debug } = require('console');
const express = require('express');
const router = express.Router();
const mealController = require('../controllers/MealController');

router.post('', mealController.store);
router.get('', mealController.index);

module.exports = router;