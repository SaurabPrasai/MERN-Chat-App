import React, { useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'
import { useSelector } from 'react-redux'


export default function MessageContainer() {
  const {chatUser,chatSelected}=useSelector(state=>state.message)
  return (
    <div className='p-3 border border-gray-500 flex flex-col justify-between flex-grow overflow-auto'>
      {
        chatSelected?<NoChatSelected/>:<>
      
        <div className='px-4 py-2 mb-2 '>
          <span className='label-text'>To:</span>
          <span className=' font-bold'>{chatUser.fullName}</span>
        </div>
       <Messages/>
      <MessageInput/>
      </>
      }
      
    </div>
  )
}
