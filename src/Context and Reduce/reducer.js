export const initialState = {
  total: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "update_price":
      return {
        ...state,
        total: action.payload,
      };
    case "increase_quantity":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "decrease_quantity":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
};

export default storeReducer;
