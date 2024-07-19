import React from "react";
import { Link } from "react-router-dom";
import Navicon from "../../imgs/Navbottom-icon.svg";
import { RiSearchLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { useCart } from "../CartContex";

const NavBottom = () => {
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <div className="">
      <div className="w-[84%] flex justify-between items-center m-auto ">
        <div className=" mt-[39px]">
          <img src={Navicon} alt="img" className="w-[190px] h-[30px]" />
        </div>
        <div className="w-[520px] mt-[39px] text-[16px] font-medium">
          <ul className="flex justify-between">
            <li>
              <Link to="/" className="text-[#0D2612]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/brands" className="text-[#0D2612]">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-[#0D2612]">
                What’s new
              </Link>
            </li>
            <li>
              <Link to="/sales" className="text-[#0D2612]">
                Sales
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-[#0D2612]">
                Help
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#0D2612]">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[135px] h-[35px] flex justify-between items-center text-[#0D2612]  mt-[39px]">
          <RiSearchLine className="w-[18px] h-[18px]" />
          <LuUser className="w-[18px] h-[18px]" />
          <ul>
            <li className="text-[#0D2612] relative">
              <Link to="/cart" className="w-[18px] h-[18px]">
                <SlBasket />
                {cartCount > 0 && (
                  <span className="absolute top-[-10px] left-[12px] w-[18px] h-[18px] flex justify-center items-center text-xs text-white bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
