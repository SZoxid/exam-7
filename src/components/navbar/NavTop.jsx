import React from "react";
import Logo from "../../imgs/logo.svg";
import { LuPhoneIncoming } from "react-icons/lu";
import Flag from "../../imgs/flag.png";
import { HiGlobeAlt } from "react-icons/hi";
import Rectangle from "../../imgs/Rectangle.png";

const NavTop = () => {
  return (
    <div className="w-[100%] h-[68px] flex justify-between border bg-[#0D2613]">
      <div className="w-[85%] h-[100%] flex justify-between m-auto">
        <div className="w-[220px] text-white flex justify-between items-center">
          <img src={Logo} alt="img" className="w-[48px] h-[30px]" />
          <LuPhoneIncoming className="w-[18px] h-[18px]" />
          <p className="text-[14px] font-medium font-sans">+4904-049-950</p>
        </div>
        <div className="w-[330px] flex justify-between  items-center text-white">
          <p className="text-[14px] font-normal">
            Get 50% Off on the Selected items{" "}
          </p>
          <img src={Rectangle} alt="img" className="w-[2px] h-[30px]" />
          <p className="text-[14px] font-normal">Shop now</p>
        </div>
        <div className="w-[270px] flex justify-between items-center text-white ">
          <div className="flex items-center gap-[11px]">
            <select className="w-[80px] h-[30px] text-[14px] font-medium text-white bg-[#0D2613] border-none">
              <option value="">English</option>
              <option value="">Russian</option>
              <option value="">Uzbek</option>
            </select>
            <img src={Flag} alt="img" className="w-[25px] h-[35px]" />
          </div>
          <div className="flex items-center gap-2">
            <HiGlobeAlt className="w-[20px] h-[20px]" />
            <p>Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
