import React from 'react';
import './App.css';
import FloatingAddBtn from 'components/FloatingAddBtn';
import Header from 'components/Header';
import TopControls from 'components/TopControls';
import TodoListArea from 'components/TodoListArea';
import CreateTodo from 'components/CreateTodo';
import SignInUp from 'components/SignInUp';
import { styled } from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  padding-top: 40px;
`;
const App: React.FC = () => {
  return (
    <StyledApp className="App">
      <Header />
      <TopControls />
      <SignInUp />
      <TodoListArea />
      <FloatingAddBtn />
      <CreateTodo />
    </StyledApp>
  );
};

export default App;
