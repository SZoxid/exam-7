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
    <div className="w-[275px] border border-red-500">
      <div>
        <h2>BRAND</h2>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>
              <input
                type="radio"
                value={brand}
                name="brand"
                id={brand}
                checked={brand === selectedBrand}
                onchange={(e) => setSelectedBrand(e.target.value)}
              />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>COLORS</h3>
        <ul className="w-[100%] grid grid-cols-4 border-[2px] border-green-500">
          {colors.map((color, index) => (
            <li key={index} className="border border-red-500">
              <div
                style={{
                  background: color,
                  outline: selectedColor === color ? "3px solid red" : "",
                }}
                className="w-7 h-7 rounded-[50%] border-[2px] border-blue-500 cursor-pointer outline-offset-[0.1rem]"
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
