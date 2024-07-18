import React, { useEffect, useState } from "react";
import Products from "../home/Products";
import FilterRight from "../home/FilterRight";

const baseURL = import.meta.env.VITE_BASE_URL;

const FetchProducts = ({ sortOrder }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await fetch(query);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();

        if (sortOrder === "cheap") {
          data = data.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "expensive") {
          data = data.sort((a, b) => b.price - a.price);
        }

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor, sortOrder]);

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

  const resetFilters = () => {
    setSelectedBrand("");
    setSelectedColor("");
  };

  return (
    <div className="w-[100%] flex">
      <FilterRight
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        resetFilters={resetFilters}
      />
      <div className="w-[100%] flex justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : products.length ? (
          <div className="w-[100%] flex justify-end">
            <div className="grid grid-cols-3 gap-[35px]">
              {products.map((product) => (
                <Products key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
};

export default FetchProducts;
