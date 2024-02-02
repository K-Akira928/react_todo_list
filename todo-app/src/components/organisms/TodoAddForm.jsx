import { useTodos } from "../../hooks/useTodos";
import { InputAndButtonForm } from "../molecules/InputAndButtonForm";

export const TodoAddForm = () => {
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputText = e.target.firstChild.value;
    if (inputText === "") return;
    e.target.firstChild.value = "";

    addTodo(inputText);
  };

  return (
    <>
      <InputAndButtonForm
        formClassName={`
          w-10/12 sm:w-7/12 lg:w-5/12
          m-auto
          flex
          justify-between
        `}
        onSubmit={handleSubmit}
        placeholder="Todoを入力"
        buttonType={"submit"}
        buttonText={"追加"}
      />
    </>
  );
};
