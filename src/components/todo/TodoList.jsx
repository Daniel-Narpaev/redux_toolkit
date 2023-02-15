import { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { BsCheckLg } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const TodoList = ({ title, item }) => {

  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch({
      type: "DELETE",
      payload: item.id,
    });

  };
  const editHandler = () => {
    setEdit(true);
    setEditValue(title);
  };

  const saveChangeHandler = (event) => {
    setEditValue(event.target.value);
  };

  const saveButton = () => {
    dispatch({
      type: "EDIT",
      id: item.id,
      payload: editValue,
    })
    setEdit(false);
  };

  const complateHandler = () => {
    dispatch({
      type: "COMPLATED",
      payload: item.id,
    });
  };
  return (
    <Container>
      {edit ? (
        <>
          <Input type="text" value={editValue} onChange={saveChangeHandler} />
          <EditSave onClick={saveButton}/>
        </>
      ) : (
        <>
          <TitleContainer>
            <CheckedBtn className={item.complated && "color"} />
            <Title
              onClick={complateHandler}
              className={item.complated && "through"}
            >
              {title}
            </Title>
          </TitleContainer>
          <BtnContainer>
          <EditBtn onClick={editHandler}/>
          <DeleteBtn onClick={deleteHandler} />
          </BtnContainer>
        </>
      )}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid blue;
  margin-bottom: 10px;
  padding: 5px;
  width: 645px;
  background-color: #08fff3;
  list-style: none;
  margin-left: 30px;
`;
const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bolder;
  margin: 0;
`;
const Input = styled.input`
  width: 90%;
  min-height: 40px;
  font-size: 1.4rem;
  font-weight: bolder;
  margin: 0;
  background-color: #08fff3;
`;
const BtnContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  .through {
    text-decoration: line-through;
  }
  .color {
    color: green;
    border: 3px solid green;
  }
`;
const EditBtn = styled(CiEdit)`
  color: #061f8f;
  font-size: 2rem;
`;
const DeleteBtn = styled(RiDeleteBin5Fill)`
  color: #061f8f;
  font-size: 2rem;
`;
const EditSave = styled(RiRefreshLine)`
  color: #061f8f;
  font-size: 2.2rem;
  margin-right: 10px;
`;
const CheckedBtn = styled(BsCheckLg)`
  color: red;
  margin-right: 10px;
  width: 24px;
  height: 23px;
  border: 3px solid red;
`;
