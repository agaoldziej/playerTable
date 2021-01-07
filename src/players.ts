
import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";

  function App() {
   const columns = useMemo(
      () => [
        {
         
          Header: "Score Table",
          columns: [
            {
              Header: "Username",
              accessor: "show.name"
            },
            {
              Header: "Points",
              accessor: "show.points"

                  );

            }
          ]
        }
    ],
        []
   );
  
  
    return (
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    );
  }
  
  export default App;