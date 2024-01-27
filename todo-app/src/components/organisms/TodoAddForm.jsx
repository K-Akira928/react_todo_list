import { InputText } from "../atoms/input/InputText"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const TodoAddForm = () => {
  return (
    <>
      <form className={`
        w-10/12 sm:w-7/12 lg:w-5/12
        m-auto
        flex
        justify-between
      `}>
        <InputText placeholder={'Todoを入力'} />
        <PrimaryButton type={'submit'}>追加</PrimaryButton>
      </form>
    </>
  )
}