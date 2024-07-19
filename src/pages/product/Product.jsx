import React from "react";
import { useLocation } from "react-router-dom";
import Star from "../../imgs/star.png";
import Btn from "../../imgs/hearth-btn.png";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className="w-[85%] h-[px] m-auto mt-[100px]">
      {product ? (
        <div className="flex justify-between ">
          <div>
            <img
              src={product.image_url}
              alt={product.product_name}
              className="w-[660px] h-[650px] object-cover"
            />
          </div>
          <div className="w-[520px] h-[px]">
            <h3 className="text-[48px] text-[#190D26] font-medium">
              {product.name}
            </h3>
            <p className="text-[18px] text-[#190D26] font-medium mt-[13px]">
              {product.description}
            </p>
            <img
              src={Star}
              alt="img"
              className="w-[160px] h-[20px] mt-[15px]"
            />
            <div className="border-t-2 border-dashed border-[#454444CC] mt-[25px]">
              <p className="text-[36px] text-[#190D26] font-semibold mt-[27px]">
                ${product.price} or 99.99/month
              </p>
              <p className="text-[18px] text-[#0D2612] font-normal mt-[12px]">
                Suggested payments with 6 month special financing
              </p>
            </div>
            <div className="border-t-2 border-dashed border-[#454444CC] mt-[25px]">
              <p className="text-[24px] text-[#0E020C] font-medium mt-[30px]">
                Choose a color
              </p>
              <div className="flex gap-[12px] mt-[20px]">
                {product.color_options.map((c, index) => (
                  <div
                    key={index}
                    className="w-[60px] h-[60px] rounded-full"
                    style={{ backgroundColor: c }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="w-full border-t-2 border-dashed border-[#454444CC] mt-[30px]">
              <div className="w-[420px] flex justify-between items-center mt-[42px]">
                <button className="w-[195px] h-[70px] flex justify-around items-center text-[26px] text-[#0D2612] font-semibold rounded-[40px] border-[3px] border-[#0BA42D]">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </button>
                <p className="w-[150px] text-[18px] text-[#0D2612] font-medium ">
                  Only 16 items left! Don’t miss it{" "}
                </p>
              </div>
            </div>
            <div className="w-[520px] h-[60px] flex justify-between items-center mt-[48px]">
              <div className="w-[400px] h-[60px] flex rounded-[10px] bg-[#0BA42D] hover:bg-[#3bcc5a]">
                <button className="w-full h-full">
                  <div className="w-full h-full flex justify-center items-center gap-[10px]">
                    <FaCartShopping className="w-[24px] h-[18px] text-white" />
                    <span className="text-[22px] text-white font-bold">
                      Add to Cart
                    </span>
                  </div>
                </button>
              </div>
              <img src={Btn} alt="img" className="w-[60px] h-[60px]" />
            </div>
          </div>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default Product;
