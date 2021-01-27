import React from 'react';
import styled from 'styled-components';


const theme = {
  beige: {
    default: 'beige',
    hover: '#ffd4c3'
  },

  pink: {
    default: '#e91e63',
    hover: '#ad1457'
  },
  blue: {
    default: '#3f51b5',
    hover: '#283593'
  },
  yellow: {
    default: '#f1f73b',
    hover: '#f7ff00'
  }

}

const Button = styled.button `
  background-color: ${props => theme[props.theme].default};
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 10px 0px;
  outline: 0;
  &:hover {
    background-color:  ${props => theme[props.theme].hover};
  }
`

Button.defaultProps = {
  theme: 'beige'
}

// function addPlayer() {
//   alert('Player added');
// }

function changeColor() {
  alert('Color changed');
}
function userRemoved() {
  alert('User removed');
}

export default function UserButtons() {
  return(
    <>
      {/* <div>
          <Button onClick={addPlayer}>
              Add Player
          </Button>
      
      </div> */}
      <div>
      <Button theme="pink" onClick={changeColor}>
          Change highlight to red
      </Button>
  </div>
  <div>
      <Button theme="blue" onClick={changeColor}>
          Change highlight to blue
      </Button>
  </div>
  <div>
      <Button theme="yellow" onClick={userRemoved}>
          Remove last user
      </Button>
  </div>
  </>
  );
}
