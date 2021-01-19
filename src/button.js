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
};

function addPlayer() {
  alert('Player added');
}
export default function userButtons() {
  return(
    <>
      <div>
          <Button onClick={addPlayer}>
              Add Player
          </Button>
      </div>
      <div>
      <Button theme="pink" onClick={addPlayer}>
          Change highlight to red
      </Button>
  </div>
  <div>
      <Button theme="blue" onClick={addPlayer}>
          Change highlight to blue
      </Button>
  </div>
  <div>
      <Button onClick={addPlayer}>
          Remove last player
      </Button>
  </div>
  </>
  );
}