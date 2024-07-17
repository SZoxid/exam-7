import React from "react";
import { Link } from "react-router-dom";
import Headerimg from "../../imgs/Header-img.svg";
import Navicon from "../../imgs/Navbottom-icon.svg";

const NavBottom = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Headerimg})` }}
      className="h-[630px] bg-cover bg-center"
    >
      <div>
        <div>
          <img src={Navicon} alt="img" />
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link to="/Products" className="text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                What’s new
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Sales
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Help
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
