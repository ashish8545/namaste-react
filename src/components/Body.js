import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //   const [intialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [topRestaurantFilter, setTopRestaurantFilter] = useState(false);
  const [resultsCount, setResultsCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setResultsCount(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ?.length
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let searchFilteredRes = filteredRestaurants.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            if (searchText === "" && !topRestaurantFilter) {
              setFilteredRestaurants(listOfRestaurants);
              setResultsCount(listOfRestaurants.length);
            } else {
              setFilteredRestaurants(searchFilteredRes);
              setResultsCount(searchFilteredRes.length);
            }
          }}
        >
          Search
        </button>
        <button
          className={"filter-btn " + (topRestaurantFilter ? "clicked" : "")}
          onClick={() => {
            if (!topRestaurantFilter) {
              let topRatedFilteredRes = filteredRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              );
              setFilteredRestaurants(topRatedFilteredRes);
              setResultsCount(topRatedFilteredRes.length);
            } else if (searchText !== "") {
              let searchFilteredRes = listOfRestaurants.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchFilteredRes);
              setResultsCount(searchFilteredRes.length);
            } else {
              setFilteredRestaurants(listOfRestaurants);
              setResultsCount(listOfRestaurants.length);
            }
            setTopRestaurantFilter(!topRestaurantFilter);
          }}
        >
          Above 4 Stars
        </button>
        <span className="showing-results-span">
          ({resultsCount} restaurants found)
        </span>
      </div>
      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
