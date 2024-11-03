import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [isVegChecked, setIsVegChecked] = useState(false);
  const [isNonVegChecked, setIsNonVegChecked] = useState(false);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    if (resInfo) {
      setMenuItems(
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
      setFilteredMenuItems(
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    }
  }, [resInfo]);

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

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    // <div className="restaurant-menu-container">
    //   <div className="p-4">
    //     <input
    //       type="checkbox"
    //       name="vegFilter"
    //       checked={isVegChecked}
    //       onChange={() => {
    //         setIsVegChecked(!isVegChecked);
    //         if (isNonVegChecked) setIsNonVegChecked(isVegChecked);
    //       }}
    //     />
    //     <span className="p-2">Veg</span>
    //     <input
    //       type="checkbox"
    //       name="nonvegFilter"
    //       checked={isNonVegChecked}
    //       onChange={() => {
    //         setIsNonVegChecked(!isNonVegChecked);
    //         if (isVegChecked) setIsVegChecked(isNonVegChecked);
    //       }}
    //     />
    //     <span className="p-2">Non-Veg</span>
    //   </div>
    //   <h1>{name}</h1>
    //   <p>
    //     {cuisines.join(", ")} - {costForTwoMessage}
    //   </p>
    //   <h2>Menu</h2>
    //   <ul>
    //     {filteredMenuItems.map((item) => (
    //       <li key={item?.card?.info?.id}>
    //         {item?.card?.info?.name} - Rs.{" "}
    //         {item?.card?.info?.defaultPrice / 100 ||
    //           item?.card?.info?.price / 100}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        {categories.map((category, index) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItemsList={index === showIndex}
            setShowIndex={(index) => setShowIndex(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
