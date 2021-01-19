import React, { Component, Fragment } from "react";

class Table extends Component {
   state: { 
     userList: { id: number; user: string; score: number; }[];
   };
   constructor(props:any) {
      super(props) 
      this.state = { 
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

   render() { 
      return (
         <Fragment>
           {this.state.userList.map((player, index) => <tr key={index}>
             <td>{player.id}
             </td>
             <td>{player.user}
             </td>
             <td>{player.score}
             </td>
             </tr>)}
           
         </Fragment>
      )
   }
};


// function pushPlayer () {

// }

// button.addEventListener ("click", function() {
//   alert("Added player to the list");
// });


export default Table

