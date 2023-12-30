import { Link } from "react-router-dom"

const TopNav = () => {
  return (
    <div className="flex items-center py-4 lg:px-6 px-3 shadow-md h-[8vh] min-h-fit">
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" className="lg:w-[12rem] w-[10rem]" />
      </Link>
    </div>
  )
}

export default TopNav
