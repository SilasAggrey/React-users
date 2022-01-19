import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
     const [users, setUsers] = useState([
     
   ]);

   const addUser = (newUser) => {
     setUsers([...users, newUser]);
   };

   return (
     <div>
       <UserForm addUser={addUser} />
       <UserList users={users} />
     </div>
   );
 };



 

export default App;
 