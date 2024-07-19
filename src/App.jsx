import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "./components/Components";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import { CartProvider } from "./components/CartContex";

const App = () => {
  return (
    <CartProvider>
      <div className="w-[1440px] b m-auto">
        <Router>
          <div>
            <Components />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
