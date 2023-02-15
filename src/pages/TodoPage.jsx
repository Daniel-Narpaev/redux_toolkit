import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/todo/Form";
import Todo from "../components/todo/Todo";
const TodoPage = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    navigate('/login')
  }
  const isActiveLink = {
    color:"#262668", 
    textDecoration:"none",
  }
  return (
    <div>
      <Container>
        <Title>Todo list</Title>
        <NavLink to="/login" style={isActiveLink} onClick={logout}>Log Out</NavLink>
      </Container>
      <Card>
        <Form />
        <Todo />
      </Card>
    </div>
  );
};

export default TodoPage;

const Card = styled.div`
  margin: 40px auto;
  width: 800px;
  box-shadow: 0px 0px 10px 1px grey;
  padding: 20px 0px;
  border-radius: 25px;
`;
const Container = styled.header`
    height: 80px;
    background-color: rgb(4, 238, 255);
    padding: 0px 0px 20px 50px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
`
const Title = styled.h1`
    color: #262668;
    font-size: 3rem;
`
// const StyledLink = 

