import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { InputCheckbox } from "../atoms/input/InputCheckbox"

export const TodoCompletedItem = (props) => {
  const { todo, onDeleteClick, onCheckboxToggle } = props
  return (
    <li className={`
      flex
      justify-between
      items-center
      mt-7
    `}>
      <div className={`
        w-8/12
        flex
        gap-14 sm:gap-24
        items-center
        justify-between
      `}>
        <InputCheckbox onChange={onCheckboxToggle} checked={todo.isCompleted} />
        <span className={`
          text-lg
          w-full
          border-b
          text-center
          line-through
        `}>
          {todo.title}
        </span>
      </div>
      <div className={`
        flex
        justify-end
      `}>
        <SecondaryButton onClick={onDeleteClick}>削除</SecondaryButton>
      </div>
    </li>
  )
}