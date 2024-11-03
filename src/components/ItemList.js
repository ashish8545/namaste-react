import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left p-2 border-b-2 flex justify-between"
        >
          <div className="w-8/12">
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
          <div className="w-2/12 p-2">
            <div className="relative left-[35%] top-[80%]">
              <div className="absolute flex items-center">
                <button
                  className="px-2 py-1 font-bold text-xs bg-white text-green-700 rounded hover:bg-gray-200"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>
            <img
              className="w-full h-20 object-cover rounded-xl"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
