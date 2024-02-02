export const TodoListLayout = (props) => {
  const { children } = props;
  return (
    <ul
      className={`
      w-10/12 sm:w-7/12 lg:w-5/12
      m-auto
    `}
    >
      {children}
    </ul>
  );
};
