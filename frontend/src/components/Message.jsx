import React from 'react'
import { useSelector } from 'react-redux'

export default function Message({message}) {
const {user}=useSelector(state=>state.user)
const {chatUser}=useSelector(state=>state.message)
  return (
    <div className={`chat  ${message.senderId==user._id?"chat-end":"chat-start"}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src={message.senderId==user._id?user.profilePic:chatUser.profilePic} />
      </div>
    </div>
    <div className="chat-bubble">{message.message}</div>
    <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>

    </div>
  )
}
