import useTodo from 'hooks/useTodo';
import React from 'react';
import { styled } from 'styled-components';

interface TodoListCardProps {
  content: string;
  id: string;
}
const publicUrl = process.env.PUBLIC_URL;
const StyledTodoListCard = styled.li`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 25px;
  input {
    margin-right: 10px;
  }
  div {
    flex: 1;
    font-size: 20px;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    // transition: 0.3s;
  }
  button img {
    width: 18px;
    height: 18px;
  }
  .delete:hover {
    filter: invert(8%) sepia(97%) saturate(5965%) hue-rotate(357deg)
      brightness(113%) contrast(117%);
  }
  .edit:hover {
    filter: invert(49%) sepia(92%) saturate(4139%) hue-rotate(226deg)
      brightness(98%) contrast(109%);
  }
`;
const TodoListCard: React.FC<TodoListCardProps> = ({ content, id }) => {
  const { remove } = useTodo();
  const deleteTodo = () => {
    console.log('id???', id);
    remove(id);
  };
  return (
    <StyledTodoListCard>
      <input type="checkbox" />
      <div>{content}</div>
      <button className="edit" onClick={deleteTodo}>
        <img src={`${publicUrl}/images/edit.svg`} alt="delete" />
      </button>
      <button className="delete" onClick={deleteTodo}>
        <img src={`${publicUrl}/images/trash.svg`} alt="delete" />
      </button>
    </StyledTodoListCard>
  );
};

export default TodoListCard;
