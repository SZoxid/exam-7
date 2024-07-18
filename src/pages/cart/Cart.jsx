import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      {product ? (
        <div>
          <h2>Product Details</h2>
          <img src={product.image_url} alt={product.product_name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="flex gap-[12px]">
            {product.color_options.map((c, index) => (
              <div
                key={index}
                className="w-[30px] h-[30px] rounded-full"
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default Cart;
