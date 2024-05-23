import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { useSelector } from "react-redux";

export default function App() {
  const {user}=useSelector(state=>state.user)
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={user?<Home/>:<Navigate to={'/login'}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={user?<Navigate to={'/'}/>:<Signup/>} />
        </Routes>
      </BrowserRouter>
  
  );
}
