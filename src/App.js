
import React, { useMemo } from "react";
import Table from "./players";
import userButtons from "./button";


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
                </tr>
             </thead>
           <tbody>
               <Table  />
            </tbody>
        </table>
        {userButtons}
      </div>
    );
  }

export default App













  // const button = document.querySelector("button");
  // button.addEventListener("click", handleClick);
  
  // function handleClick() {
  //     console.log("Change color to blue!");
  //     this.removeEventListener("click", handleClick);
  // }
  // const randoms = [...Array(1)].map(() => Math.floor(Math.random() * 200));

// document.body.innerText = randoms;