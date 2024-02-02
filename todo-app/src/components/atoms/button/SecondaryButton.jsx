export const SecondaryButton = (props) => {
  const { children } = props;
  return (
    <button
      className={`
      text-sm sm:text-base
      font-bold
      border
      rounded-xl
      py-1.5 px-3
      border-red-400
      text-red-400

      hover:bg-red-500
      hover:text-white
    `}
      {...props}
    >
      {children}
    </button>
  );
};
