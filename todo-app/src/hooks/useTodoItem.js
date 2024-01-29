import { useState } from "react";

export const useTodoItem = () => {
  const [todoId, setTodoId] = useState(1)

  const todoCreate = (title) => {
    const todo = {
      id: todoId,
      title: title,
      isCompleted: false,
      isEdit: false
    };

    setTodoId(todoId + 1);
    return todo;
  };

  return { todoCreate }
};
