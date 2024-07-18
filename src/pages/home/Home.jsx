import React, { useState } from "react";
import FilterTop from "../home/FilterTop";
import FetchProducts from "../home/FetchProducts";

const Home = () => {
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div>
      <FilterTop sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <div className="w-[92%] flex m-auto mt-[70px]">
        <FetchProducts sortOrder={sortOrder} />
      </div>
    </div>
  );
};

export default Home;