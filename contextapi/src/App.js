import { useState } from 'react';
import './App.css';
import Adduser from './components/Adduser';
import {UserList} from "./components/UserList";
import { AppContext } from './Context';
function App() {
  const [users, setUsers]=useState([]);
  const dispatchUserEvent=(actionType, payload)=>{
      switch (actionType){
        case "ADD_USER":
          setUsers([...users,payload.newUser]);
          return;
        case "REMOVE_USER":
          setUsers(users.filter(user=>user.id!==payload.userId));
          return;
        default:
          return;
      }
  }
  return (
    <div>
      <AppContext.Provider value={{users,dispatchUserEvent}}>
   <Adduser/>
   <UserList/> 
      </AppContext.Provider>
    </div>
  );
}

export default App;
