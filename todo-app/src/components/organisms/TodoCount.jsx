export const TodoCount = () => {
  return (
    <>
      <div className={`
        text-white
        font-bold
        p-5
        text-xl
      `}>
        <p>全てのタスク：0</p>
        <p>完了したタスク：0</p>
        <p>未完了のタスク：0</p>
      </div>
    </>
  )
}