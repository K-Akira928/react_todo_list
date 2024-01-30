import { useTodos } from "../../hooks/useTodos";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { InputCheckbox } from "../atoms/input/InputCheckbox";

export const TodoItem = (props) => {
  const { todo } = props;

  const { deleteTodo, todoStatusChange } = useTodos();

  return (
    <li
      className={`
      flex
      justify-between
      items-center
      mt-7
    `}
    >
      <div
        className={`
        w-8/12
        flex
        gap-14 sm:gap-24
        items-center
        justify-between
      `}
      >
        <InputCheckbox
          onChange={() =>
            todoStatusChange({
              status: "isCompleted",
              id: todo.id,
              value: !todo.isCompleted,
            })
          }
          defaultChecked={todo.isCompleted}
        />
        <span
          className={`
          text-lg
          w-full
          border-b
          text-center
        `}
        >
          {todo.title}
        </span>
      </div>
      <div
        className={`
        w-15
        justify-end
        flex
        gap-2
      `}
      >
        <PrimaryButton
          onClick={() =>
            todoStatusChange({
              status: "isEdit",
              id: todo.id,
              value: !todo.isEdit,
            })
          }
        >
          編集
        </PrimaryButton>
        <SecondaryButton onClick={() => deleteTodo({ id: todo.id })}>
          削除
        </SecondaryButton>
      </div>
    </li>
  );
};
