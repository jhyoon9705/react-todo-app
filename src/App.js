import './App.css';
import React from 'react';
import AppTemplate from './components/AppTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <AppTemplate>
      <TodoInsert />
      <TodoList />
    </AppTemplate>
  );
};

export default App;
