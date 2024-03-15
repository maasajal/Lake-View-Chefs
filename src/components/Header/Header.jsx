import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 my-12">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Lake View</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex-none gap-2">
          <div className="form-control rounded-full md:w-auto bg-gray-100 flex flex-row px-3 lg:px-6 py-3 items-center gap-2">
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent md:flex hidden"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-[#0BE58A] hover:text-[#0BE58A]"
            >
              <FaRegUserCircle className="text-2xl  rounded-full" />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
