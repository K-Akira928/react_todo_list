import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { InputCheckbox } from "../atoms/input/InputCheckbox"

export const TodoItem = (props) => {
  const { todo, onDeleteClick, onEditClick } = props
  return (
    <li className={`
      flex
      justify-between
      items-center
      mt-7
    `}>
      <InputCheckbox />
      <span className={`
        text-lg
        w-7/12
        border-b
        text-center
      `}>{todo.title}</span>
      <div className={`
        flex
        gap-2
      `}>
        <PrimaryButton onClick={onEditClick}>編集</PrimaryButton>
        <SecondaryButton onClick={onDeleteClick} >削除</SecondaryButton>
      </div>
    </li>
  )
}