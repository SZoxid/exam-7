import React from "react";
import { useState, useEffect } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

const FilterRight = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch(`${baseURL}/brands`);
      const data = await response.json();
      setBrands(data);
    }
    async function fetchColors() {
      const response = await fetch(`${baseURL}/colors`);
      const data = await response.json();
      setColors(data);
    }

    fetchBrands();
    fetchColors();
  }, []);

  return (
    <div className="w-[275px] border-t-2 border-dashed border-[#454444CC] ">
      <div className="w-[270px]">
        <h2 className="mt-[27px] text-[20px] text-[#190D26] font-medium font-sans ">
          BRAND
        </h2>
        <ul className="text-[18px] text-[#190D26] font-normal mt-[23px]">
          {brands.map((brand, index) => (
            <li key={index}>
              <input
                type="radio"
                value={brand}
                name="brand"
                id={brand}
                checked={brand === selectedBrand}
                onchange={(e) => setSelectedBrand(e.target.value)}
                className="w-[20px] h-[20px] border-[2px] border-[#0BA42D] rounded-[5px]"
              />
              <label className="leading-[35px] ml-[18px]" htmlFor={brand}>
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t-2 border-dashed border-[#454444CC] mt-[26px]">
        <h3 className="mt-[27px] text-[20px] text-[#190D26] font-medium font-sans">
          COLORS
        </h3>
        <ul className="w-[164px] grid grid-cols-5 mt-[24px] gap-[11px]">
          {colors.map((color, index) => (
            <li key={index}>
              <div
                style={{
                  background: color,
                  outline: selectedColor === color ? "3px solid red" : "",
                }}
                className="w-6 h-6 rounded-[50%] cursor-pointer outline-offset-[1px]"
                onClick={() => setSelectedColor(color)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterRight;
