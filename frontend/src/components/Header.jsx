import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="navbar bg-base-100 md:px-20">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          lustyCHAT
        </Link>
      </div>
      <div className="flex flex-row gap-x-8">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {
            user?<div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user"
                  src={user.profilePic}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={""} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={""}>Settings</Link>
              </li>
              <li>
                <Link to={""}>Logout</Link>
              </li>
            </ul>
          </div>:<Link to={'/login'}>Login</Link>
        }
      </div>
    </div>
  );
}
