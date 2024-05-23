import MessageContainer from "../components/MessageContainer"
import Siderbar from "../components/Siderbar"

const Home = () => {
  return (
    <div className=" flex flex-row h-screen  ">
    {/* left */}
          <Siderbar/>
          {/*right  */}
          <MessageContainer/>
    </div>
  )
}

export default Home