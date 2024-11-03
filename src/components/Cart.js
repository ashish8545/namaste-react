import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto">
      <div className="font-bold text-center">Cart</div>
      {!cartItems.length ? (
        <h1 className="text-center">No items found in cart</h1>
      ) : (
        <div>
          <div className="flex justify-end pr-4">
            <button
              className="py-1 px-2 bg-red-400 rounded-md text-xs text-white hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
