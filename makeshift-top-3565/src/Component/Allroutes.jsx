import {Routes, Route} from "react-router-dom";
import  Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Home from "../Pages/Home"
import Camera from "../Pages/Camera"

const Allroutes=()=>{
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
}

export default Allroutes;