import React from "react";


const useState = React.useState

function AddUserInput(props) {
    const [user, setUser] = useState()
    const [score, setScore] = useState()
  
  function handleUserSubmit(e) {
    e.preventDefault()
    props.this.state(prev => prev.concat({user, score, id: Date.now()}))
    setUser("")
    setScore("")
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


