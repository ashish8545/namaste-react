import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [topRestaurantFilter, setTopRestaurantFilter] = useState(false);
  const [resultsCount, setResultsCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const removeDuplicates = (arr) => {
    const uniqueArray = arr.filter(
      (item, index, self) =>
        index ===
        self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(item))
    );
    return uniqueArray;
  };

  useEffect(() => {
    let tmpRes1 = [];
    let tmpRes2 = [];
    const searchResult = filterSearch(listOfRestaurants, searchText);
    const topResult = filterTopRated(
      searchResult.length ? searchResult : listOfRestaurants,
      topRestaurantFilter
    );

    tmpRes1 = searchResult.length ? searchResult : [];
    tmpRes2 = topResult.length ? topResult : [];
    let finalRes = tmpRes1.concat(tmpRes2).length
      ? removeDuplicates(tmpRes1.concat(tmpRes2))
      : [];

    if (!finalRes.length) finalRes = listOfRestaurants;
    setFilteredRestaurants(finalRes);
    setResultsCount(finalRes.length);
  }, [searchText, topRestaurantFilter]);

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

  const filterSearch = (restaurants, searchInput) => {
    let filteredRes = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return searchInput !== "" ? filteredRes : [];
  };

  const filterTopRated = (restaurants, topResFlag) => {
    let filteredRes = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.4
    );

    return topResFlag ? filteredRes : [];
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
            filterSearch(listOfRestaurants, searchText);
          }}
          placeholder="Search"
        />
        <button
          className={"filter-btn " + (topRestaurantFilter ? "clicked" : "")}
          onClick={() => {
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
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
