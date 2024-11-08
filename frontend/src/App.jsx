import { Routes, Route } from "react-router-dom";
import {
  Home,
  Collection,
  About,
  Contact,
  Cart,
  Login,
  Orders,
  PlaceOrder,
  Product,
} from "./pages/export";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/collection"} element={<Collection />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/product/:id"} element={<Product />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/place-order"} element={<PlaceOrder />} />
        <Route path={"/orders"} element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
