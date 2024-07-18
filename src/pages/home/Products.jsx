import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Products = ({ product }) => {
  const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
  };

  return (
    <div className="w-[310px] h-[605px] border bg-[#F4F4F4]">
      <img
        src={product.image_url}
        alt={product.product_name}
        className="w-full h-[300px] object-cover"
      />
      <h4 className="text-[#190D26] text-[20px] font-semibold mt-[22px]">
        {product.name}
      </h4>
      <p className="text-[#190D26] text-[18px] font-normal mt-[12px]">
        {product.description}
      </p>
      <div className="flex gap-[12px] border mt-[21px] mb-[25px] ">
        {product.color_options.map((c) => (
          <div
            key={c}
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>

      <div className="">
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className=""
          ></div>
        ))}
      </div>

      <strong className="text-[22px] font-bold font-sans">
        {product.price}
      </strong>
      <div className="w-[230px] h-[60px] flex items-center rounded-[10px] bg-[#0BA42D] mt-[17px]">
        <Button className="">
          <span className="text-[22px] text-white font-bold ">Add to Cart</span>
          <FaCartShopping />
        </Button>
      </div>
    </div>
  );
};

export default Products;
