import './App.css';
import { useState } from 'react';

import { HeaderLayout } from './components/templates/HeaderLayout';
import { TodoAddForm } from './components/organisms/TodoAddForm';
import { TodoListLayout } from './components/templates/TodoListLayout';
import { FooterLayout } from './components/templates/FooterLayout';
import { TodoCount } from './components/organisms/TodoCount';
import { TodoItem } from './components/organisms/TodoItem';
import { TodoEditItem } from './components/organisms/TodoEditItem';
import { TodoCompletedItem } from './components/organisms/TodoCompletedItem';

import { useTodoCount } from './hooks/useTodosStatus';

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
  };

  const onTodoDelete = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onTodoEdit = (id) => {
    const newTodos = [...todos];
    const editTodoTarget = newTodos.find((todo) => todo.id === id);
    editTodoTarget.isEdit = !editTodoTarget.isEdit;
    setTodos(newTodos);
  };

  const onTodoEditSave = ({e, id}) => {
    e.preventDefault();

    const newTodos = [...todos];
    const editTodoTarget = newTodos.find((todo) => todo.id === id);
    editTodoTarget.title = e.target.firstChild.value;
    editTodoTarget.isEdit = !editTodoTarget.isEdit;

    setTodos(newTodos);
  };

  const onTodoCompleteToggle = (id) => {
    const newTodos = [...todos];
    const completedToggleTodoTarget = newTodos.find((todo) => todo.id === id);
    completedToggleTodoTarget.isCompleted = !completedToggleTodoTarget.isCompleted;

    setTodos(newTodos);
  }

  const todoCount = useTodoCount(todos);

  return (
    <>
      <HeaderLayout />
      <TodoAddForm onSubmit={(e) => onTodoAdd(e)} />
      <TodoListLayout>
        {todos.map((todo) => {
          return (
            todo.isEdit
                ? (
                <TodoEditItem
                  key={todo.id}
                  todo={todo}
                  onEditSave={(e) => onTodoEditSave({e, id: todo.id})}
                />
              ) : (
                todo.isCompleted
                ? (
                <TodoCompletedItem
                  key={todo.id}
                  todo={todo}
                  onCheckboxToggle={() => onTodoCompleteToggle(todo.id)}
                />
              ) : (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDeleteClick={() => onTodoDelete(todo.id)}
                  onEditClick={() => onTodoEdit(todo.id)}
                  onCheckboxToggle={() => onTodoCompleteToggle(todo.id)}
                />
              )
            )
          )
        })}
      </TodoListLayout>
      <FooterLayout>
        <TodoCount
          isAllTodoCount={todoCount.isAllCount}
          isCompletedTodoCount={todoCount.isCompletedCount}
        />
      </FooterLayout>
    </>
  );
}

export default App;
