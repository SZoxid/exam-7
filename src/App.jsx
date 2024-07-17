import React from "react";
import Components from "./components/Components";
import NavBottom from "./components/navbar/NavBottom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <div className="w-[1440px] border border-red-500 m-auto">
      <Router>
        <div>
          <Components />
          <NavBottom />
          <Product />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
