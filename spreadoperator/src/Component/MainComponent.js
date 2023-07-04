import React from 'react'

const MainComponent = () => {
    const person={
        name:"Lakshmi",
        age:27,
        city:"Bangalore"
    };
    const updatedPerson={...person,age:26, profession:"Software Engineer"};
    const number=[1,2,3];
    const mergedNumbers=[...number,4,5,6];
  return (
    <div>
        <p>Name:{updatedPerson.name}</p>
        <p>Age:{updatedPerson.age}</p>
        <p>City:{updatedPerson.city}</p>
        <p>Profession:{updatedPerson.profession}</p>
        <ul>
        {mergedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  )
}

export default MainComponent