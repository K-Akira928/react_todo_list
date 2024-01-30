export const PrimaryButton = (props) => {
  const { children, type, onClick } = props;
  return (
    <button
      className={`
      text-sm sm:text-base
      font-bold
      border
      rounded-xl
      py-1.5 px-3
      border-sky-400
      text-sky-400

      hover:bg-sky-500
      hover:text-white
    `}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
