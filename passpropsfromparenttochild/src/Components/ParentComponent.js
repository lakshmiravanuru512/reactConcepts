import React from 'react';
import { ChildComponent } from './ChildComponent';

const ParentComponent = () => {
    const name="Lakshmi Devi";
    const age=25;
  return (
    <div>
        <ChildComponent name={name} age={age}/>
    </div>
  )
}

export default ParentComponent