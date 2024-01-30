import { useTodos } from "../../hooks/useTodos";

export const TodoCount = () => {
  const { countTodos } = useTodos();
  const count = countTodos();
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
        <p>全てのタスク：{count.isAll}</p>
        <p>完了したタスク：{count.isCompleted}</p>
        <p>未完了のタスク：{count.isIncompleted}</p>
      </div>
    </>
  );
};
