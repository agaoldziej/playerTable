import React, { Fragment ,useState } from "react";
import AddUserInput from "./add";
import {IUser} from "./interfaces";
import {players} from "./players";
import "./index.css";
import ToggleHighlight from "./toggle";

export default function PlayerTable() {

   const [usersList, setUsersList] = useState<IUser[]>(players);
   const [isHighlightedRed, setIsHighlightedRed] = useState<boolean>(false);
   const [isHighlightedBlue, setIsHighlightedBlue] = useState<boolean>(false);

   const handleRemove = (id: number) => {
      const newUserList = usersList.filter((player:IUser) => player.id !== id);
      setUsersList(newUserList);
   }
  
   const handleAdd = (user: IUser) => {
      const newUserList = [...usersList, user];
      setUsersList(newUserList);
   }
 
   const getHighlight = (score: number) => {
      let classname = ''
      if (score > 100) {
         
         if (isHighlightedRed) {
            classname = 'highlightRed'
         }
         if (isHighlightedBlue) {
            classname = 'highlightBlue'
         }
     }
         return classname;
      }
   const handleRemoveHighlight = () => {
      setIsHighlightedRed(false)
      setIsHighlightedBlue(false)
   }
   const setRed = (change: boolean) => {
      if (isHighlightedBlue) {
         setIsHighlightedBlue(false)
      }
      setIsHighlightedRed(change)
   }

   const setBlue = (change: boolean) => {
      if (isHighlightedRed) {
         setIsHighlightedRed(false)
      }
      setIsHighlightedBlue(change)
   }

   return (
      <Fragment>
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
                  <th>
                     Delete
                  </th>
               </tr>
            </thead>
            <tbody>
                  {usersList.map((player, index) => <tr key={index} className={getHighlight(player.score)}>
                  <td>{player.id}
                  </td>
                  <td>{player.user}
                  </td>
                  <td>{player.score}
                  </td>
                  <td>
                  <button onClick={() => handleRemove(player.id)}>Delete</button>
                  </td>
               </tr>)}
            </tbody>
         </table>
         <AddUserInput handleAdd={handleAdd} lastindex={usersList.length} />
         <ToggleHighlight setIsHighlighted={setRed}/>
         <ToggleHighlight setIsHighlighted={setBlue}/>
         <button onClick={() => handleRemoveHighlight()}>Remove Highlight</button>
      </Fragment>
   )
}

