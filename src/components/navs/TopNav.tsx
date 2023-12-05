import { Link } from "react-router-dom"

const TopNav = () => {
  return (
    <div className="flex items-center py-4 px-6 shadow-md h-[8vh] min-h-fit">
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" className="w-[12rem]" />
      </Link>
    </div>
  )
}

export default TopNav
