import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'


function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put pepper on Chicken \n2. Add marinate with lemon and herb \n3. Put in oven',
    ingredients: [
      {
        id: 1,
        name:'Chicken',
        amount: ' 1 Pound'
      },
      {
        id: 2,
        name:' herbs',
        amount: ' 1 Tbs'
      }

    ]
  },
  {
    id: 2,
    name: 'Plain Rice',
    servings: 5,
    cookTime: '0:25',
    instructions: '1. Mix Chicken with rice\n2. Add spices to rice \n3. cook rice',
    ingredients: [
      {
        id: 1,
        name:'Chicken ',
        amount: '2 Pound '
      },
      {
        id: 2,
        name:'spices',
        amount: ' 2 Tbs'
      }

    ]
  }
]

export default App;
