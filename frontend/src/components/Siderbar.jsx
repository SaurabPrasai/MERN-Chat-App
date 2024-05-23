import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdWavingHand } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Siderbar() {
  const { user } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const users = await res.json();

        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className=" w-96 p-3 mx-5 h-screen border border-gray-500 overflow-auto">
      <div className="mb-5">
        <form>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
        {/* <h1 className=" font-serif text-2xl chat-bubble flex flex-row gap-2 items-center">
          hello {user.username}
          <MdWavingHand />
        </h1> */}
      </div>

      {users.map((user) => (
        <div
          className="flex flex-row overflow-auto  items-center gap-x-4 hover:opacity-90  w-full p-4 hover:bg-gray-700 cursor-default" 
          key={Math.random()}
        >
          <div className="w-12 rounded-full avatar online">
            <img alt="user" src={user.profilePic} className="w-7" />
          </div>
          <h1 className="text-xl">{user.fullName}</h1>
        </div>
      ))}
    </div>
  );
}
