import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupFailure, signupStart, signupSuccess } from "../redux/slice/userSlice";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const dispatch=useDispatch();
  const {error,loading}=useSelector((state)=>state.user)
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(signupStart());
      const res=await fetch('/api/auth/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data=await res.json();
      if(!res.ok){
      return dispatch(signupFailure(data.errorMessage))
      }
      dispatch(signupSuccess())
        navigate('/login')
    } catch (error) {
      console.log(error.message);
    }

  };
  return (
    <div className=" max-w-lg mx-auto mt-32">
      <h1 className=" text-center text-3xl my-5">Signup</h1>
      <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow w-96"
            placeholder="Fullname"
            id="fullName"
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow w-96"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            id="confirmPassword"
            onChange={handleChange}
          />
        </label>
        <div className=" flex flex-row justify-center items-center gap-x-3">
       Male:<input type="radio"  className="checkbox" id="gender" name="gender" value={"male"} onChange={handleChange}/>
       Female:<input type="radio" className="checkbox" id="gender" value={"female"} name="gender" onChange={handleChange}/>

        </div>
        <button className="btn btn-outline" disabled={loading}>{loading?"Loading":"Signup"}</button>
      </form>
      <p className=" text-center my-5">
        Already have an account?
        <Link to={"/login"} className=" text-blue-600 pl-2">Click here!</Link>
      </p>
      {
          error && <p className="text-red-600">{error}</p>
      }
    </div>
  );
}
