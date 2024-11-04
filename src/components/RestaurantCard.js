import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="ml-10 my-4 p-4 w-[250px] bg-gray-200 rounded-lg h-[400px] hover:bg-gray-300 hover:border-[1px] hover:border-gray-500"
    >
      <img
        className="rounded-lg w-[100%] h-[200px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="italic text-sm">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 mx-8 text-xs">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
