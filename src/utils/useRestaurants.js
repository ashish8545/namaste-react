import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "./constants";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);

    const json = await data.json();

    setListOfRestaurants(json);
  };

  return listOfRestaurants;
};

export default useRestaurants;
