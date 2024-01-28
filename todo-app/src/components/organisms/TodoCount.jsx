export const TodoCount = (props) => {
  const { isAllTodoCount, isCompletedTodoCount } = props;
  return (
    <>
      <div className={`
        text-white
        font-bold
        p-5
        text-xl
      `}>
        <p>全てのタスク：{isAllTodoCount}</p>
        <p>完了したタスク：{isCompletedTodoCount}</p>
        <p>未完了のタスク：{(isAllTodoCount - isCompletedTodoCount)}</p>
      </div>
    </>
  )
}