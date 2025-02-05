import useTodo from 'hooks/useTodo';
import React from 'react';
import useEditModalStore from 'stores/useEditModalStore';
import useEditTodoStore from 'stores/useEditTodoStore';
import { styled } from 'styled-components';

interface TodoListCardProps {
  content: string;
  id: string;
}
const publicUrl = process.env.PUBLIC_URL;
const StyledTodoListCard = styled.li`
  display: flex;
  border-bottom: 1px solid #6c63ff;
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
    opacity: 0;
    transition: 0.3s;
  }
  &:hover > button {
    opacity: 1;
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
  const { openModal } = useEditModalStore();
  const { setTodoId, setContent } = useEditTodoStore();
  const deleteTodo = () => remove(id);
  const editTodo = () => {
    setTodoId(id);
    setContent(content);
    openModal();
  };
  return (
    <StyledTodoListCard>
      <input type="checkbox" />
      <div className="kanit-medium">{content}</div>
      <button className="edit" onClick={editTodo}>
        <img src={`${publicUrl}/images/edit.svg`} alt="edit" />
      </button>
      <button className="delete" onClick={deleteTodo}>
        <img src={`${publicUrl}/images/trash.svg`} alt="delete" />
      </button>
    </StyledTodoListCard>
  );
};

export default TodoListCard;
