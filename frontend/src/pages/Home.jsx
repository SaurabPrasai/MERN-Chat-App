import { useDispatch, useSelector } from "react-redux"
import MessageContainer from "../components/MessageContainer"
import Siderbar from "../components/Siderbar"
import { useState,useEffect } from "react"
import { getMessage } from "../redux/slice/messageSlice"

const Home = () => {
  const {chatUser}=useSelector(state=>state.message)
  const dispatch=useDispatch()

  // fetch all chat 
  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch(`/api/messages/${chatUser._id}`);
      const data = await res.json();
      if (!res.ok) {
        return console.log("Message not fetched");
      }
     dispatch(getMessage(data))
    };
    fetchMessage();
  }, [chatUser]);
  return (
    <div className=" flex flex-row  h-90vh  ">
    {/* left */}
          <Siderbar  />
          {/*right  */}
          <MessageContainer  />
    </div>
  )
}

export default Home