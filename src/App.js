import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/actions';

function App() {
  const todos = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div className='container p-3 w-50'>
      <TodoForm onAddTodo={(text) => dispatch(addTodo(text))}/>
      <TodoList todos={todos}/>
    </div>
  )
}


export default App

