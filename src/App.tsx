import React from 'react';
import './App.css';
import FloatingAddBtn from 'components/FloatingAddBtn';
import Header from 'components/Header';
import NightModeToggleBtn from 'components/NightModeToggleBtn';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FloatingAddBtn />
      <NightModeToggleBtn />
    </div>
  );
};

export default App;
