export const useTodoCount = (todos) => {
  const todoCount = {
    isAllCount: todos.length,
    isCompletedCount: todos.filter((todo) => todo.isCompleted).length
  }
  return todoCount;
}