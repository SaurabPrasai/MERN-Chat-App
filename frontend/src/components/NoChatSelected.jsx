import React from 'react'
import { useSelector } from 'react-redux'
import { MdWavingHand } from "react-icons/md";
import { TiMessage } from "react-icons/ti";

export default function NoChatSelected() {
    const {user}=useSelector(state=>state.user)
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-y-2'>
         <p className=' flex flex-row  items-center gap-2 text-2xl'>Welcome <MdWavingHand/> {user.fullName} </p>
         <p className=' text-2xl'>Select a chat to start messaging</p>
         <TiMessage className=' text-4xl'/>
    </div>
  )
}
