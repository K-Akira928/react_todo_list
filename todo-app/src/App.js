import './App.css';
import { useState } from 'react';

import { HeaderLayout } from './components/templates/HeaderLayout';
import { TodoAddForm } from './components/organisms/TodoAddForm';
import { TodoListLayout } from './components/templates/TodoListLayout';
import { FooterLayout } from './components/templates/FooterLayout';
import { TodoCount } from './components/organisms/TodoCount';
import { TodoItem } from './components/organisms/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  const onTodoAdd = (e) => {
    e.preventDefault();
    const inputText = e.target.firstChild.value;
    if (inputText === '') return;
    e.target.firstChild.value = '';

    const newTodo = {
      id: todoId,
      title: inputText,
      isCompleted: false,
      isEdit: false
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoId(todoId + 1);
  }

  return (
    <>
      <HeaderLayout />
      <TodoAddForm onSubmit={(e) => onTodoAdd(e)} />
      <TodoListLayout>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
             />
          )
        })}
      </TodoListLayout>
      <FooterLayout>
        <TodoCount />
      </FooterLayout>
    </>
  );
}

export default App;
