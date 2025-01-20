import React from 'react';
import { styled } from 'styled-components';
import Empty from './Empty';
import TodoListCard from './TodoListCard';

const StyledTodoListArea = styled.ul`
  width: calc(100% - 8rem);
  height: 650px;
  overflow: hidden;
  overflow-y: scroll;
  margin: auto;
  margin-top: 30px;
`;
const data: string[] = ['test'];
const TodoListArea: React.FC = () => {
  return (
    <StyledTodoListArea>
      {data.length ? (
        data?.map((e, i) => <TodoListCard key={`Todo#${i.toString()}`} />)
      ) : (
        <Empty />
      )}
    </StyledTodoListArea>
  );
};

export default TodoListArea;
