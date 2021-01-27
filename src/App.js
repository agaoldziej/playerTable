
import React, {useState} from "react";
import Table from "./playerlist";
import UserButtons from "./button";
import AddUserForm from "./add";


  function App() {
     
    return (
      <div className="App">
        <Table />
        <AddUserForm />
        <UserButtons />
      </div>
    );
  }

export default App


