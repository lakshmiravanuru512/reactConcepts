import './App.css';
import Fruits from './Components/Fruits';
import Car from './Components/Car';

function App() {

   const fruits={
    name:"Mango",
    color:"Yellow"
   }

  return (
    <div className="App">
      <Fruits fruits={fruits}/>
      <hr></hr>
      <Car/>
    </div>
  );
}

export default App;
