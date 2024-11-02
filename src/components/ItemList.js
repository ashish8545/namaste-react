import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left p-2 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-lg">{item?.card?.info?.name}</span>
              <span className="text-lg">
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="pt-2 italic text-xs">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="w-2/12 p-4">
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
