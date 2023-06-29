import React from 'react'

function Fruits(props) {
  return (
    <div>
        <h1>Fruits</h1>
        <h2>Name:{props.fruits.name}</h2>
        <h3>Color:{props.fruits.color}</h3>
    </div>
  )
}

export default Fruits