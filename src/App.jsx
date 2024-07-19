import React from "react";
import Components from "./components/Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="w-[1440px] border border-red-500 m-auto">
      <Router>
        <div>
          <Components />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />{" "}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
