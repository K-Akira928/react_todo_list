import { useRecoilState } from "recoil";
import { useTodoItem } from "./useTodoItem";
import { todosState } from "../store/todosState";

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const { todoCreate } = useTodoItem();

  const addTodo = (title) => {
    const newTodo = todoCreate(title);
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const deleteTodo = ({id}) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const todoStatusChange = ({status, id, value}) => {
    const newTodos = [...todos];
    const toggleTarget = newTodos.find((todo) => todo.id === id);

    toggleTarget[status] = value;

    setTodos(newTodos);
  };

  const countTodos = () => {
    return {
      isAll: todos.length,
      isCompleted: todos.filter((todo) => todo.isCompleted).length
    }
  };

  return { addTodo, deleteTodo, countTodos, todoStatusChange };
};
