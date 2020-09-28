import React from 'react';
import './App.css';
import '../meal/Meal'
import Meal from '../meal/Meal';



function App() {

  var meals = [{  
    name: "Hamburger",
    description: "TCarne nobre e molhos variados",
    value: "42,00"
  }]
  
  var mealsList = meals.map( meal => {
    return <li><Meal name={meal.name} description='Carne nobre e molhos variados' value='42,00'></Meal> </li>
  });

  return (
    <ul>
      {mealsList}  
    </ul>
      
  );

  
}

export default App;
