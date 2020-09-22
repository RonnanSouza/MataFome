const {Schema , model} = require('mongoose');

const MealSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required:true},
    value: {type: Number, required: true},
},{
    timestamps:true,
});

// Exportar o modelo
module.exports = model('Meal', MealSchema);