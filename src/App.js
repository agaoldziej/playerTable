
import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";

  function App() {
    const columns = useMemo(
      () => [
        {
          // first group - TV Show
          Header: "Score table",
          // First group columns
          columns: [
            {
              Header: "Name",
              accessor: "show.name"
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
        <Table columns={columns} data={data} />
      </div>
    );
  }
  
  export default App;