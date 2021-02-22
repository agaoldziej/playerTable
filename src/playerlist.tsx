import React, { Component, Fragment } from "react";
import AddUserInput from "./add";
import {IUser} from "./interfaces";
import "./index.css";



export default class Table extends Component {
   state: { 
     userList: IUser[];
    
   };
   constructor(props:any) {
      super(props) 
      this.state = { 
         userList: [
            {
              id: 1,
              user: 'Adam',
              score: 11
            },
            {
                id: 2,
                user: 'Bob',
                score: 22
            },
            {
                id: 3,
                user: 'Czarek',
                score: 33
              },
              {
                  id: 4,
                  user: 'Daniel',
                  score: 44
              },
              {
                id: 5,
                user: 'Ewa',
                score: 55
              },
              {
                  id: 6,
                  user: 'Filip',
                  score: 66
              },
              {
                id: 7,
                user: 'Gosia',
                score: 77
              },
              {
                  id: 8,
                  user: 'Henryk',
                  score: 88
              },
              {
                id: 9,
                user: 'Iza',
                score: 99
              },
              {
                  id: 10,
                  user: 'Jan',
                  score: 111
              }
          ]
      } 
   }



 addNewUser = (user: IUser) => {
   this.setState((prevState:any) => ({
      userList:[...prevState.userList, {id: prevState.userList[prevState.userList.length-1].id + 1, ...user}] 
    }));
};


handleRemove(id: any) {
    const newUserList = this.state.userList.filter(player => player.id !== id);
    this.setState({userList: newUserList});
    }
  

   render() { 
      return (
         <Fragment>
            <table id='userList'>
             <thead>
                <tr>
                   <th>
                      Id
                   </th>
                   <th>
                      User Name
                   </th>
                   <th>
                      Score
                   </th>
                   <th>
                      Delete
                   </th>
                </tr>
             </thead>
           <tbody>
            
           {this.state.userList.map((player, index) => <tr key={index} className={player.score > 100 ? "highlight" : ""}>
             <td>{player.id}
             </td>
             <td>{player.user}
             </td>
             <td>{player.score}
             </td>
             <td>
                <button onClick={() => this.handleRemove(player.id)}>Delete</button>
             </td>
             </tr>)}
             </tbody>
        </table>
        <AddUserInput addUser={(user: IUser) => this.addNewUser(user)}/>

         </Fragment>
      )
   }
};

