export const FooterLayout = (props) => {
  const { children } = props;
  return (
    <footer className={`
      bg-orange-400
      sm:w-3/4 lg:w-1/2
      sm:my-4 lg:my-6
      sm:m-auto
      text-center
      sm:rounded-xl lg:rounded-2xl
    `}>
      {children}
    </footer>
  )
}