import React, { useEffect, useState } from "react";
import Products from "../home/Products";

const FetchProducts = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

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
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor]);

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : products.length ? (
          <div className="w-[100%] flex justify-end">
            <div className="grid grid-cols-3 gap-[35px] ]">
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
