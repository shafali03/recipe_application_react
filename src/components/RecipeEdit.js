import React from 'react'

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
     <div>
       <button>&times;</button>
     </div>
     <div>
       <label htmlFor="name">Name</label>
       <input type="text" name="name" id="name" />
     </div>

     <div>
       <label htmlFor="cookTime">Cook Time</label>
       <input type="text" name="cookTime" id="cookTime" />
     </div>

     <div>
       <label htmlFor="servings">Servings</label>
       <input type="text" name="servings" id="servings" />
     </div>
    </div>
  )
}
