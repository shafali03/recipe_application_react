import React from 'react'

export default function Recipe() {
  return (
    <div>
      <div>
        <h3>Plain Chicken</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>1:45</span>
      </div>
      <div>
        <span>Serving:</span>
        <span>3</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>
          1. Put pepper on Chicken
          2. Put marinate with lemon and herb
          3. Put in oven
        </div>
      </div>
    </div>
  )
}
