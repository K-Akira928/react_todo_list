import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { InputCheckbox } from "../atoms/input/InputCheckbox"

export const TodoItem = (props) => {
  const { todo, onDeleteClick, onEditClick, onCheckboxToggle } = props
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
        `}>
          {todo.title}
        </span>
      </div>
      <div className={`
        w-15
        justify-end
        flex
        gap-2
      `}>
        <PrimaryButton onClick={onEditClick}>編集</PrimaryButton>
        <SecondaryButton onClick={onDeleteClick}>削除</SecondaryButton>
      </div>
    </li>
  )
}