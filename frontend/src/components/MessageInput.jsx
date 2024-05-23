import {BsSend} from 'react-icons/bs'

export default function MessageInput() {
  return (
    <form className="px-4 my-3">
          <label className="input input-bordered flex items-center gap-2">
          <input type="text" name="" className="block w-full rounded-lg p-2.5" id="" placeholder="Send a message"/>
       <button><BsSend/></button>
          </label>
      
    </form>
  )
}
