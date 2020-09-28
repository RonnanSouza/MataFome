import React from 'react';

function Meal(props) {
  return (
    <div>
        <img></img>
        <h2> {props.name}</h2>
        <p> {props.description}</p>
        <h3> R$ {props.value} </h3>
        <button> Comprar</button>
    </div>
  );
}

export default Meal;
