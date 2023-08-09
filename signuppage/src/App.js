import { SignUp } from './SignUp';
import { AppBar } from './AppBar';
import { SignIn } from './SignIn';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div style={{height: "100vh",width:"100vw",backgroundColor:"#eeeeee"}}>
    <AppBar/>
    <Router>
      <Routes>
        <Route path="/signin" element ={<SignIn />}/>
        <Route path="/signup" element ={<SignUp />}/>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
