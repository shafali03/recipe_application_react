import React, {useState} from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import uuidv4 from 'uuid/v4'


function App() {
  const [recipes, setRecipe] = useState (sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1Tbps' }
      ]
    }
  
    setRecipe([...recipes, newRecipe])
  }


  return (
    <RecipeList 
    recipes={recipes}
     handleRecipeAdd={handleRecipeAdd} 
    />
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
