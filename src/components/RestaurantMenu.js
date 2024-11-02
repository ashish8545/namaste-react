import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [isVegChecked, setIsVegChecked] = useState(false);
  const [isNonVegChecked, setIsNonVegChecked] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (resInfo) {
      if (isVegChecked) {
        setFilteredMenuItems(
          menuItems.filter((item) => item?.card?.info?.isVeg === 1)
        );
      } else if (isNonVegChecked) {
        setFilteredMenuItems(
          menuItems.filter((item) => item?.card?.info?.isVeg !== 1)
        );
      } else {
        setFilteredMenuItems(menuItems);
      }
    }
  }, [isVegChecked, isNonVegChecked]);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setFilteredMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;

  return (
    <div className="restaurant-menu-container">
      <div className="veg-filter">
        <input
          type="checkbox"
          name="vegFilter"
          checked={isVegChecked}
          onChange={() => {
            setIsVegChecked(!isVegChecked);
            if (isNonVegChecked) setIsNonVegChecked(isVegChecked);
          }}
        />{" "}
        Veg
        <input
          type="checkbox"
          name="nonvegFilter"
          checked={isNonVegChecked}
          onChange={() => {
            setIsNonVegChecked(!isNonVegChecked);
            if (isVegChecked) setIsVegChecked(isNonVegChecked);
          }}
        />{" "}
        Non-Veg
      </div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {filteredMenuItems.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;