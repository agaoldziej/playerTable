import React, { Component } from "react";

//   const userListLoop = () => (
//     <ul>
//       {userList.map(item => (
//         <li key={item.user}>
//           <div>{item.user}</div>
//           <div>{item.score}</div>
//         </li>
//       ))}
//     </ul>
//   );



  

//   export default userListLoop


class Table extends Component {
   state: { //state is by default an object
     userList: { id: number; user: string; score: number; }[];
   };
   constructor(props:any) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         userList: [
            {
              id: 1,
              user: 'Adam',
              score: 11,
            },
            {
                id: 2,
                user: 'Bob',
                score: 22,
            },
            {
                id: 3,
                user: 'Czarek',
                score: 33,
              },
              {
                  id: 4,
                  user: 'Daniel',
                  score: 44,
              },
              {
                id: 5,
                user: 'Ewa',
                score: 55,
              },
              {
                  id: 6,
                  user: 'Filip',
                  score: 66,
              },
              {
                id: 7,
                user: 'Gosia',
                score: 77,
              },
              {
                  id: 8,
                  user: 'Henryk',
                  score: 88,
              },
              {
                id: 9,
                user: 'Iza',
                score: 99,
              },
              {
                  id: 10,
                  user: 'Jan',
                  score: 111,
              }
          ]
           
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>React Dynamic Table</h1>
         </div>
      )
   }
};



export default Table

