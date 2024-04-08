const Header = () => {
  return (
    <div className="text-center fixed top-0 z-50 w-full h-[4vh]">{import.meta.env.VITE_API_URL}</div>
  )
}

export default Header