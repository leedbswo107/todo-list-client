import useAuth from 'hooks/useAuth';
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
  const { fetchUserInfo } = useAuth();
  const user = useUserStore((state) => state.setUser);
  useEffect(() => {
    const fetchData = async () => {
      await fetchUserInfo();
      const updatedUser = useUserStore.getState().user;
      if (!updatedUser) {
        setData([]);
        return;
      }
      if (updatedUser) {
        try {
          const list: TodoItem[] = await load(updatedUser.id);
          setData(list);
        } catch (error) {
          console.error('Error loading todos:', error);
        }
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
            // userId={e.userId}
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
