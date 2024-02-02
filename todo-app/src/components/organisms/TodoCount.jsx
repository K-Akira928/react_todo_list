import { useTodos } from "../../hooks/useTodos";

export const TodoCount = () => {
  const { countTodos } = useTodos();
  const { isAll, isCompleted, isIncompleted } = countTodos();
  return (
    <>
      <div
        className={`
        text-white
        font-bold
        p-5
        text-xl
      `}
      >
        <p>全てのタスク：{isAll}</p>
        <p>完了したタスク：{isCompleted}</p>
        <p>未完了のタスク：{isIncompleted}</p>
      </div>
    </>
  );
};
