import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList || []);
  const [topRestaurantFilter, setTopRestaurantFilter] = useState(false);

  return (
    <div className="body">
      <div className="filter">
        <button
          className={"filter-btn " + (topRestaurantFilter ? "clicked" : "")}
          onClick={() => {
            if (!topRestaurantFilter) {
              let filteredRes = listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              );
              setListOfRestaurants(filteredRes);
            } else {
              setListOfRestaurants(resList);
            }
            setTopRestaurantFilter(!topRestaurantFilter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
