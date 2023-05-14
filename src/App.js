import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireAuth from './components/Auth/RequireAuth';
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import AllMeetings from "./components/Dashboard/AllMeetings";
import CreateMeetings from "./components/Dashboard/CreateMeetings";
import Dashboard from "./components/Dashboard/Dashboard";
import MyMeetings from "./components/Dashboard/MyMeetings";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} ></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} ></Route>
        <Route path="/createMeetings" element={<RequireAuth><CreateMeetings/></RequireAuth>} ></Route>
        <Route path="/myMeetings" element={<RequireAuth><MyMeetings/></RequireAuth>} ></Route>
        <Route path="/allMeetings" element={<RequireAuth><AllMeetings/></RequireAuth>} ></Route>
        <Route path="/career" element={<Career/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/signin" element={<Login/>} ></Route>
        <Route path="/forgetPassword" element={<ForgetPassword/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
