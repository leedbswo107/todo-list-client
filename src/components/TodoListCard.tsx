import React from 'react';
import { styled } from 'styled-components';

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
`;
const TodoListCard: React.FC = () => {
  return (
    <StyledTodoListCard>
      <input type="checkbox" />
      <div>test</div>
    </StyledTodoListCard>
  );
};

export default TodoListCard;
