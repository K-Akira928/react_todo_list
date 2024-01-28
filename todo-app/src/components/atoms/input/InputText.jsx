export const InputText = (props) => {
  const { placeholder, onChange, defaultValue } = props;
  return (
    <>
      <input className={`
        w-10/12 sm:w-10/12 lg:w-10/12
        text-center
        border
        rounded-xl
        py-1

        focus:outline-none
        focus:border-sky-400
      `} type="text" placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
    </>
  )
}