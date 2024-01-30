import { useTodos } from "../../hooks/useTodos";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { InputCheckbox } from "../atoms/input/InputCheckbox";

export const TodoCompletedItem = (props) => {
  const { todo } = props;

  const { todoStatusChange, deleteTodo } = useTodos();

  const handleDelete = ({ id }) => {
    alert("本当に削除してもよろしいですか？");
    deleteTodo({ id });
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
          checked={todo.isCompleted}
        />
        <span
          className={`
          text-lg
          w-full
          border-b
          text-center
          line-through
        `}
        >
          {todo.title}
        </span>
      </div>
      <div
        className={`
        flex
        justify-end
      `}
      >
        <SecondaryButton onClick={() => handleDelete({ id: todo.id })}>
          削除
        </SecondaryButton>
      </div>
    </li>
  );
};
