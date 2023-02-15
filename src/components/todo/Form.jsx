import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Form = () => {
const [state, setState] = useState("")
const dispatch = useDispatch()

  const inputChangeHandler = (e) => {
    setState(e.target.value);
  };

  const disableBtn = state.trim().length > 0

  const savehandler = (e) => {
    e.preventDefault();

     dispatch({
      type: "ADD",
      payload: state,
      complated:false
    });
       setState("")
  };

  const deleteAllHandler = () => {
    dispatch({
      type: "DELETE_ALL",
      payload:[]
    });
  }
  return (
    <Container>
      <Input 
        type="text" 
        value={state} 
        onChange={inputChangeHandler} 
        placeholder="Введите текст"/>
      <StyledBtn onClick={savehandler} disabled={!disableBtn}>add</StyledBtn>
      <StyledDeleteBtn onClick={deleteAllHandler}>delete all</StyledDeleteBtn>
    </Container>
    
  );
};

export default Form;

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Input = styled.input`
    width: 500px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #00ffea;
    margin-left: 20px;
    border-radius: 5px;
    padding: 6px;
    outline: none;
    border: none;
    font-size: 1.4rem;
    border: 1px solid rgb(179, 179, 179);

  :disabled {
    background-color: rgb(255, 121, 235, 0.584);
    border: 1px solid red;
  }

  &:focus {
    background-color: #d5fffc;
  }
`
const  StyledDeleteBtn = styled.button`
    width: 120px;
    height: 43px;
    background-color: #ff0000;
    color: #000000;
    border: 2px solid blue;
    font-size: 1.4rem;
    margin-left: 15px;
    font-weight:bold;
    margin-right: 20px;
`
const StyledBtn = styled.button`
    width: 100px;
    height: 43px;
    background-color: #00ffea;
    color: #000000;
    border: 2px solid blue;
    font-size: 1.4rem;
    margin-left: 15px;
    font-weight:bold;
    margin-right: 10px;
`