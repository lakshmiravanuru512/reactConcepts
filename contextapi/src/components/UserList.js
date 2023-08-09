import React,{useContext} from 'react';
import { AppContext } from '../Context';
import User from "./User";
import App from '../App';

export const UserList = () => {
    const {users} =useContext(AppContext) 
  return (
    <div>
        <h3>Available Users</h3>
        {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

