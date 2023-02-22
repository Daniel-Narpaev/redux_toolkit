import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoList from "./TodoList";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todo);
  return (
    <UlList>
      {todos.map((item) => {
        return <TodoList key={item.id} title={item.title} item={item} />;
      })}
    </UlList>
  );
};

export default Todo;

const UlList = styled.ul`
  min-height: 50px;
`;
