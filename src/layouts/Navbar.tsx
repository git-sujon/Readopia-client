import { Link } from "react-router-dom";
import bookSvg from "../assets/book-svgrepo-com.svg";
import { useAppSelector } from "../redux/hooks";
const Navbar = () => {

  const {user, isLoading} = useAppSelector(state=> state.user)

  console.log("user:", user.email)



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to="/" className="text-xl font-bold">
                Books
              </Link>
            </li>

            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>

              <Link to="/add-book" className=" font-bold">
                Add Book
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="btn btn-warning btn-outline  normal-case text-2xl font-bold text-yellow-600"
          >
            Readopia <img className="w-10 h-10 " src={bookSvg} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
          <li>
            <Link to="/" className="text-lg font-bold border">
              Books
            </Link>
          </li>

          {/* <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to="/add-book" className="text-lg font-bold border">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {
          !user?.email ? <><Link to='/login' className="btn  btn-outline btn-warning">Login</Link>
          <Link to='/signUp' className="btn  btn-outline btn-warning">Sign up</Link></> :  <button  className="btn  btn-outline btn-warning">Logout</button>
        }
        
       
      </div>
    </div>
  );
};

export default Navbar;
