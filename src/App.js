import './App.css';
import React from 'react';
import AppTemplate from './components/AppTemplate';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <AppTemplate>
      <TodoInsert />
    </AppTemplate>
  );
};

export default App;
