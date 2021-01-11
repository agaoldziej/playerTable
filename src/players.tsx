
import React from "react";
import Table from "./Table";
import ReactDOM from "react-dom";
const userList = [
    {
      user: 'Adam',
      score: 11,
    },
    {
        user: 'Bob',
        score: 22,
    },
    {
        user: 'Czarek',
        score: 33,
      },
      {
          user: 'Daniel',
          score: 44,
      },
      {
        user: 'Ewa',
        score: 55,
      },
      {
          user: 'Filip',
          score: 66,
      },
      {
        user: 'Gosia',
        score: 77,
      },
      {
          user: 'Henryk',
          score: 88,
      },
      {
        user: 'Iza',
        score: 99,
      },
      {
          user: 'Jan',
          score: 111,
      }
  ];
   
  const userListLoop = () => (
    <ul>
      {userList.map(item => (
        <li key={item.user}>
          <div>{item.user}</div>
          <div>{item.score}</div>
        </li>
      ))}
    </ul>
  );



  

  export default userListLoop

