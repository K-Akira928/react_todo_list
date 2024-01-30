export const InputCheckbox = (props) => {
  const { onChange, checked } = props;
  return (
    <input
      className={`
      w-5
      h-5
      accent-orange-400
    `}
      type="checkbox"
      onChange={onChange}
      defaultChecked={checked}
    />
  );
};
