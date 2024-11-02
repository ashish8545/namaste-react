import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemsList, setShowIndex }) => {
  const handleCollapse = () => {
    setShowIndex();
  };
  return (
    <div className="bg-gray-100 w-6/12 my-6 mx-auto pt-4 px-6 shadow-lg">
      <div
        className="flex justify-between pb-4 cursor-pointer"
        onClick={handleCollapse}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        {showItemsList ? <span>⬆️</span> : <span>⬇️</span>}
      </div>

      {showItemsList && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
