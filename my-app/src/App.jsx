import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 style={{color:'white',textAlign:'center',fontSize:'55px'}}>Todo List</h2>
      <div className="add-todo">
      <input
          className='search'
          type="text"
          placeholder="Enter a new todo"
         
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              style={{background:'white'}}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{color:'white',fontWeight:'600',fontSize:'20px'}}>{todo.text}</span>
            
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default App;
