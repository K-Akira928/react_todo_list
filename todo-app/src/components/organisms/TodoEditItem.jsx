import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { InputText } from "../atoms/input/InputText"

export const TodoEditItem = (props) => {
  const { todo, onEditSave } = props
  return (
    <li className={`
      flex
      justify-between
      items-center
      mt-7
    `}>
      <form className={`
        w-full
        m-auto
        flex
        justify-between
      `} onSubmit={onEditSave}>
        <InputText className={`
        `} defaultValue={todo.title} />
        <PrimaryButton type={'submit'}>保存</PrimaryButton>
      </form>
    </li>
  )
}