import { useRecoilValue } from "recoil";

import { TodoAddForm } from "../organisms/TodoAddForm";
import { TodoCount } from "../organisms/TodoCount";
import { TodoItem } from "../organisms/TodoItem";
import { FooterLayout } from "../templates/FooterLayout";
import { TodoListLayout } from "../templates/TodoListLayout";
import { todosState } from "../../store/todosState";
import { TodoEditItem } from "../organisms/TodoEditItem";
import { TodoCompletedItem } from "../organisms/TodoCompletedItem";
import { useCallback } from "react";

export const Todo = () => {
  const todos = useRecoilValue(todosState);
  return (
    <>
      <TodoAddForm />
      <TodoListLayout>
        {todos.map((todo) => {
          return todo.isEdit ? (
            <TodoEditItem key={todo.id} todo={todo} />
          ) : todo.isCompleted ? (
            <TodoCompletedItem key={todo.id} todo={todo} />
          ) : (
            <TodoItem key={todo.id} todo={todo} />
          );
        })}
      </TodoListLayout>
      <FooterLayout>
        <TodoCount />
      </FooterLayout>
    </>
  );
};
