import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    // Check if the product is already in the basket
    const existingProductIndex = state.products.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the basket, update its quantity
      const updatedBasket = state.products.map((p, index) =>
        index === existingProductIndex ? { ...p, quantity: p.quantity + 1 } : p
      );
      updatePrice(updatedBasket);
      dispatch({
        type: "add",
        payload: updatedBasket,
      });
    } else {
      // If the product is not in the basket, add it with quantity 1
      const updatedBasket = [...state.products, { ...product, quantity: 1 }];
      updatePrice(updatedBasket);
      dispatch({
        type: "add",
        payload: updatedBasket,
      });
    }
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.title !== product.title
    );
    updatePrice(updatedBasket);
    dispatch({
      type: "remove",
      payload: updatedBasket,
    });
  };

  const increaseQuantity = (productId) => {
    const updatedBasket = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updatePrice(updatedBasket);
    dispatch({
      type: "increase_quantity",
      payload: productId, // Passing productId instead of updatedBasket
    });
  };

  const decreaseQuantity = (productId) => {
    const updatedBasket = state.products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    updatePrice(updatedBasket);
    dispatch({
      type: "decrease_quantity",
      payload: productId, // Passing productId instead of updatedBasket
    });
  };

  const updatePrice = (products) => {
    let total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    dispatch({
      type: "update_price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
