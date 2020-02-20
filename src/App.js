import React from 'react';
import RecipeList from './RecipeList'


function App() {
  return (
    <RecipeList recipe={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instruction: '1. Put pepper on Chicken \n2. Put marinate with lemon and herb \n3. Put in oven'
  },
  {
    id: 2,
    name: 'Plain rice',
    servings: 5,
    cookTime: '0:25',
    instruction: '1. Mix Chicken with rice\n2. Add spices to rice \n3. cook rice'

  }
]

export default App;
