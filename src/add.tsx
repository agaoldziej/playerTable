import React from "react";
import {IUser} from "./interfaces";

const useState = React.useState

function AddUserInput(props:any) {
  const [user, setUser] = useState<string>("");
  const [score, setScore] = useState<string>("");

  const handleUserSubmit = (e:any) => {
    e.preventDefault();
    const newUser= {
      id: props.lastindex +1,
      user: user, 
      score: parseInt(score)
    } as IUser;
    props.handleAdd(newUser);
    setUser("");
    setScore("");
  }
    return (
      <form onSubmit={handleUserSubmit}>
        <fieldset>
          <legend>Add New User</legend>
          <input value={user} onChange={e => setUser(e.target.value)} placeholder="User name" />
          <input value={score} onChange={e => setScore(e.target.value)} placeholder="User score" />
          <button>Add User</button>
        </fieldset>
      </form>
    )
  }

  export default AddUserInput

