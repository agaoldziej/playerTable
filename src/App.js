
import React, { useMemo, useState, useEffect } from "react";
import Table from "./table";
//import Table from "./players"

  function App() {
    const columns = useMemo(
      () => [
        {
          Header: "Score table",
          columns: [
            {
              Header: "Name",
              accessor: "show.user"
            },
            {
              Header: "Score",
              accessor: "show.score"
            }
          ]
        },
        
      ],
      []
    );

    return (
      <div className="App">
        <Table columns={item.user} data={item.score} />
      </div>
    );
  }

// renderTableData() ; {
//   return this.state.userList.map((userList, index) => {
//      const { id, user, score } = userList //destructuring
//      return (
//         <tr key={id}>
//            <td>{id}</td>
//            <td>{user}</td>
//            <td>{score}</td>
           
//         </tr>
//      )
//   })
// }

// render(Table) ;{
//   return (
//      <div>
//         <h1 id='title'>React Dynamic Table</h1>
//         <table id='userList'>
//            <tbody>
//               {this.renderTableData()}
//            </tbody>
//         </table>
//      </div>
//   )
// };

export default App



























  // const button = document.querySelector("button");
  // button.addEventListener("click", handleClick);
  
  // function handleClick() {
  //     console.log("Change color to blue!");
  //     this.removeEventListener("click", handleClick);
  // }