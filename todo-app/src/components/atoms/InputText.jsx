export const InputText = (props) => {
  const { placeholder, onChange } = props;
  return (
    <>
      <input className={`
        w-3/4
        text-center
        border
        rounded-xl
        py-1 px-3

        focus:outline-none
        focus:border-sky-400
      `} type="text" placeholder={placeholder} onChange={onChange} />
    </>
  )
}