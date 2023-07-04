import React from 'react'

const ChildChomponent = ({handleMessage}) => {
    const handleClick=()=>{
        handleMessage("Hello From Child")
    }
  return (
    <div>
        <h1>ChildComponent</h1>
        <button onClick={handleClick}>change message</button>
        </div>
  )
}

export default ChildChomponent