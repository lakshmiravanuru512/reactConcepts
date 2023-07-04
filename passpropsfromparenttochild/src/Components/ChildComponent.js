import React from 'react'

export const ChildComponent = (props) => {
    
  return (
    <div>
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
    </div>
  )
}
