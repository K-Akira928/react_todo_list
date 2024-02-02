import { useTodos } from "../../hooks/useTodos";
import { InputAndButtonForm } from "../molecules/InputAndButtonForm";

export const TodoEditItem = (props) => {
  const { todo } = props;

  const { todoStatusChange } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputText = e.target.firstChild.value;
    if (inputText === "") return;
    e.target.firstChild.value = "";

    todoStatusChange({ status: "title", id: todo.id, value: inputText });
    todoStatusChange({ status: "isEdit", id: todo.id, value: !todo.isEdit });
  };

  return (
    <li
      className={`
      flex
      justify-between
      items-center
      mt-7
    `}
    >
      <InputAndButtonForm
        formClassName={`
        w-full
        m-auto
        flex
        justify-between
        `}
        onSubmit={handleSubmit}
        buttonType={"submit"}
        buttonText={"保存"}
        defaultValue={todo.title}
      />
    </li>
  );
};
