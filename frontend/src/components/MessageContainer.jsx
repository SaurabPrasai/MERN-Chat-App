import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'

export default function MessageContainer() {
  const noChatSelected=false
  return (
    <div className='p-3 border border-gray-500 flex-grow overflow-auto'>
      {
        noChatSelected?<NoChatSelected/>:<>
      
        <div className='px-4 py-2 mb-2 '>
          <span className='label-text'>To:</span>
          <span className=' font-bold'>John doe</span>
        </div>
       <Messages/>
      <MessageInput/>
      </>
      }
      
    </div>
  )
}
