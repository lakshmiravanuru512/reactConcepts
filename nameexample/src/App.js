
import './App.css';

function App() {
  let name="Name";
  let newName=name.split("");
  return (
    <div >
      <ul>
        {newName.map((n,index)=>(
          <li key={index} className='list'>
            {newName.slice(0,index+1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
