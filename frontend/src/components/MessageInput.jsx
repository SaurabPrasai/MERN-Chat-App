import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../redux/slice/messageSlice";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { chatUser } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/messages/send/${chatUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      if (!res.ok) {
        return console.log("Message not submitted to the backend");
      }

      dispatch(sendMessage(data));

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name=""
          value={message}
          className="block w-full rounded-lg p-2.5"
          id="message"
          onChange={handleChange}
          placeholder="Send a message"
        />
        <button>
          <BsSend />
        </button>
      </label>
    </form>
  );
}
