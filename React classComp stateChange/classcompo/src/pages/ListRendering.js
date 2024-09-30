import React from 'react'
import {Recipes} from '../component/Data'

const ListRendering = () => {

  const Recipe = Recipes.map((dish) => {
  const ingredientsList = dish.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));


  return (
      <div key={dish.id}>
        <h2>{dish.name}</h2> {/* Render the recipe name here */}
        <ul>{ingredientsList}</ul> {/* Use the ingredients variable */}
      </div>
    );
  }
  )

  return (
    <div>
        <div>
      <h1>Recipes</h1>
      <div>{Recipe}</div>
    </div>
    </div>
  )
}

export default ListRendering
