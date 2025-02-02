import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/CartContex";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const handleNameClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="w-[310px] h-[605px] border bg-[#F4F4F4] mb-[25px]">
      <img
        src={product.image_url}
        alt={product.product_name}
        className="w-full h-[300px] object-cover"
      />
      <h4
        className="text-[#190D26] text-[20px] font-semibold mt-[22px] cursor-pointer"
        onClick={handleNameClick}
      >
        {product.name}
      </h4>
      <p className="text-[#190D26] text-[18px] font-normal mt-[12px]">
        {product.description}
      </p>
      <div className="flex gap-[12px] mt-[21px] mb-[25px] ">
        {product.color_options.map((c) => (
          <div
            key={c}
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>
      <strong className="text-[22px] font-bold font-sans">
        ${product.price}
      </strong>
      <div className="w-[230px] h-[60px] flex rounded-[10px] bg-[#0BA42D] mt-[17px] hover:bg-[#3bcc5a]">
        <button onClick={handleAddToCart} className="w-full h-full">
          <div className="w-full h-full flex justify-center items-center gap-[10px]">
            <FaCartShopping className="w-[24px] h-[18px] text-white" />
            <span className="text-[22px] text-white font-bold ">
              Add to Cart
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Products;
