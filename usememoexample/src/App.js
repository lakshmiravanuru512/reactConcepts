import ExpensiveComponent from './Components/ExpensiveComponent';
import './App.css';
import React,{useState} from "react";

function App() {
  const [data, setData]=useState([1,2,3,4,5,6]);
  const handleClick=()=>{
    setData([1,2,3,4,5,6,7,8,9,10])
  }
  return (
    <div className="App">
      <ExpensiveComponent data={data}/>
      <button onClick={handleClick}>change</button>
    </div>
  );
}

export default App;
