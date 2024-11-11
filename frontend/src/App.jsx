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
import { Navbar } from "./components/export";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/collection"} element={<Collection />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/product/:productId"} element={<Product />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/place-order"} element={<PlaceOrder />} />
        <Route path={"/orders"} element={<Orders />} />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default App;
