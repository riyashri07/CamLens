import {Routes, Route} from "react-router-dom";
import  Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Home from "../Pages/Home"
import Camera from "../Pages/Camera"
import SingleProductPage from "../Pages/SingleProductPage"
import PaymentForm from "../Pages/PaymentForm";
import OrderSuccessfull from "../Pages/OrderSuccessfull";
import Cart from "../Pages/Cart"

const Allroutes=()=>{
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/successful" element={<OrderSuccessfull />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
}

export default Allroutes;