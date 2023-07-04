import React,{useState} from 'react'
import ChildChomponent from './ChildChomponent';

const ParentComponent = () => {
    const[message,setMessage]=useState();
    const handleMessage=(newMessage)=>{
        setMessage(newMessage);
    }
  return (
    <div>
        <h1>ParentComponent</h1>
        <p>Message From Child:{message}</p>
        <ChildChomponent handleMessage={handleMessage}/>
    </div>
  )
}

export default ParentComponent