import React from "react";

const FilterTop = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="w-[100%] h-[85px] bg-[#D5F8CF] mt-[80px]">
      <div className="w-[92%] h-[100%] flex justify-between items-center m-auto">
        <p className="text-[24px] font-normal text-[#0BA42D]">Filter by:</p>
        <select
          className="w-[130px] h-[40px] text-[24px] text-[#0BA42D] font-normal bg-[#D5F8CF] border-none outline-none"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Sort by</option>
          <option value="cheap">Cheap</option>
          <option value="expensive">Expensive</option>
        </select>
      </div>
    </div>
  );
};

export default FilterTop;
