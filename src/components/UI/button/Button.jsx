import React from 'react'
import styled from 'styled-components';

const Button = ({children, onClick,...props}) => {
  return (
    <ButtonLogin {...props} onClick={onClick}>{children}</ButtonLogin>
  )
}

export default Button
const ButtonLogin = styled.button`
  background-color: rgb(4, 238, 255);
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 1.4rem;
  :disabled {
    background-color: #236db3b5;
  }
  &:active {
    background-color: #150072;
  }
`;
