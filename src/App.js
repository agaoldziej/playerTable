
import React, { useMemo, useState, useEffect } from "react";
import Table from "./table";
import userListLoop from "./players"

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
        Hello user
      </div>
    );
  }
  
  //   return (
  //     <div className="App">
  //       <userTableLoop columns={columns} data={data} />
  //     </div>
  //   );
  // }
  
  ReactDOM.render((<App />), document.getElementById("root"));