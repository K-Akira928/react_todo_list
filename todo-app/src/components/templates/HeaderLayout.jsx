export const HeaderLayout = () => {
  return (
    <>
      <div className={`
        bg-orange-400
        sm:w-3/4 lg:w-1/2
        sm:my-4 lg:my-6
        sm:m-auto
        text-center
        sm:rounded-xl lg:rounded-2xl
      `}>
        <h1 className={`
          text-white
          font-bold
          py-4 sm:py-6 lg:py-7
          text-2xl sm:text-3xl lg:text-4xl
        `}>HC React Todo課題</h1>
      </div>
    </>
  )
}