import React, { useContext } from "react";
import { storeContext } from "../Context and Reduce/StoreContext";

const CartProduct = ({ item }) => {
  const { removeFromBasket, increaseQuantity, decreaseQuantity } =
    useContext(storeContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(item.id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(item.id);
  };

  return (
    <div className="screen grid grid-cols-4 gap-4 items-center px-10">
      <img
        src={item.img}
        alt={item.title}
        className="w-40 border-solid border-2 border-black-500 py-3 rounded my-2"
      />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium pt-3">{item.title}</p>
        <p className="text-lg">Rs&nbsp;{item.price.toFixed(2)}</p>
      </div>
      <div className="flex mt-3">
        <button
          className="btn btn-secondary mx-1 px-3 py-1"
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="btn btn-secondary mx-1 px-3 py-1"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-secondary mx-auto my-1 px-auto py-2 hover:bg-red-500"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
