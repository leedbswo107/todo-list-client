import useTodo from 'hooks/useTodo';
import React, { useEffect, useState } from 'react';
import useUserStore from 'stores/useUserStore';
import { styled } from 'styled-components';
import Empty from './Empty';
import TodoListCard from './TodoListCard';

const StyledTodoListArea = styled.ul`
  max-width: 720px;
  height: 650px;
  overflow: hidden;
  overflow-y: scroll;
  margin: auto;
  margin-top: 30px;
`;

interface TodoItem {
  _id: string;
  content: string;
  userId: string;
}

const TodoListArea: React.FC = () => {
  const [data, setData] = useState<TodoItem[]>([]);
  const { load } = useTodo();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setData([]);
        return;
      }
      try {
        const list: TodoItem[] = await load(user.id);
        console.log('Loaded list:', list);
        setData(list);
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <StyledTodoListArea>
      {data.length !== 0 ? (
        data?.map((e) => (
          <TodoListCard
            content={e.content}
            id={e._id}
            userId={e.userId}
            key={e._id}
          />
        ))
      ) : (
        <Empty />
      )}
    </StyledTodoListArea>
  );
};

export default TodoListArea;
