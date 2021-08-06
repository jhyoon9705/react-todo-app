import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import AppTemplate from './components/AppTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'chapter 01', checked: true },
    { id: 2, text: 'chapter 02', checked: true },
    { id: 3, text: 'chapter 03', checked: false },
    { id: 4, text: 'chapter 04', checked: false },
  ]);

  const nextId = useRef(5);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <AppTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </AppTemplate>
  );
};

export default App;
