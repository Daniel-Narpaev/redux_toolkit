import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import styled from "styled-components";
  import { useNavigate } from "react-router-dom";
import { authActions } from "../store/reducer/authReducer/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const ableBtn =
    formState.password.trim().length > 3 && formState.email.includes("@");

  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email.includes("@") && formState.password === "1234") {
      dispatch(authActions.login({email: formState.email, password:formState.password}));
    }
    navigate("/todo");
  };
  return (
    <>
      <Header>
        <Title>Registration</Title>
      </Header>
      <Conteiner>
        <InputBox>
          <Input
            title="E-mail"
            type="email"
            onChange={inputChangeHandler("email")}
            value={formState.email}
          />

          <Input
            title="Password"
            type="password"
            onChange={inputChangeHandler("password")}
            value={formState.password}
          />

          <Button onClick={submitHandler} disabled={!ableBtn}>
            login
          </Button>
        </InputBox>
      </Conteiner>
    </>
  );
};

export default LoginPage;

// const InputBox = styled.div`

// `
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
`;
const Conteiner = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 40px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 510px;
  flex-wrap: wrap;
`;
const Header = styled.header`
  height: 80px;
  background-color: rgb(4, 238, 255);
  padding: 0px 0px 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: #262668;
  font-size: 3rem;
`;
