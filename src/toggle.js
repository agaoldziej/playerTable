import React, {useState } from "react";
import "./index.css";

export default function ToggleHighlight({setIsHighlighted}) {
    const [toggle, setToggle] = useState(false);
    const toggleIt = () => {
        setToggle(!toggle)
        setIsHighlighted(true)
    }
    return (
        <div>
            <button onClick={toggleIt}>{'Show Higlight'}</button>
        </div>
      
    );
}