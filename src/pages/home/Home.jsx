import React from "react";
import FilterTop from "../home/FilterTop";
import FilterRight from "../home/FilterRight";
import FetchProducts from '../home/FetchProducts'

const Home = () => {
  return (
    <div>
      <FilterTop />
      <div className="w-[92%] flex m-auto mt-[70px] border border-black">
        <FilterRight />
        <FetchProducts />
      </div>
    </div>
  );
};

export default Home;
