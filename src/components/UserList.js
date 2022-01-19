import React from "react";

 const UserList = (props) => {
   return (
     <div>
       <h1>List of users</h1>
       {props.users.map((user, index) => {
         return (
           <div key={index}>
             <h3>{user.name}</h3>
             <h4>{user.email}</h4>
             <h5>{user.gen}</h5>
           </div>
         );
       })}
     </div>
   );
 };



export default UserList;

