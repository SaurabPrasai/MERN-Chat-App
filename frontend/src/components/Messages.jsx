import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

export default function Messages() {
  
  const {messages}=useSelector(state=>state.message)

  const lastMessageRef = useRef();
 
  // scrolling to last message
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
  }, [messages]);

  return (
    <div className="px-4 overflow-auto">
      {messages?.length == 0 ? (
        <p className=" text-2xl text-center">
          Send a message to start the conversation
        </p>
      ) : (
        messages?.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message
              message={message}
            />
          </div>
        ))
      )}
    </div>
  );
}
