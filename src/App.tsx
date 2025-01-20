import React from 'react';
import './App.css';
import FloatingAddBtn from 'components/FloatingAddBtn';
import Header from 'components/Header';
import TopControls from 'components/TopControls';
import TodoListArea from 'components/TodoListArea';
import CreateTodo from 'components/CreateTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TopControls />
      <TodoListArea />
      <FloatingAddBtn />
      <CreateTodo />
    </div>
  );
};

export default App;
