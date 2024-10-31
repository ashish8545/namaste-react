import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="res-card-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
