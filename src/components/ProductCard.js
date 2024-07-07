import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { useContext } from "react";
import { storeContext } from "../Context and Reduce/StoreContext";

export default function ProductCard({ product }) {
  const { addToBasket } = useContext(storeContext);
  const handleAdd = () => {
    addToBasket(product);
  };
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const clickHandler = (curIndex) => {
    setRating(curIndex);
  };
  const hoverHandler = (curIndex) => {
    setHover(curIndex);
  };
  const outsideHandler = () => {
    setHover(rating);
  };
  return (
    <div className="product">
      <div>
        <p>{product.category}</p>
      </div>
      <div>
        <img
          className="d-flex justify-content-center align-items-center"
          src={
            product.img !== "N/A"
              ? product.img
              : "https://via.placeholder.com/400"
          }
          alt={product.title}
        />
      </div>
      <div>
        <span>
          <b>Rs {product.price}</b>
        </span>
        <h3>{product.title}</h3>
        <span className="star">
          {[...Array(5)].map((element, index) => {
            index += 1;
            return (
              <IoMdStar
                className=""
                id={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => clickHandler(index)}
                onMouseMove={() => hoverHandler(index)}
                onMouseLeave={() => outsideHandler()}
                size={20}
                key={index}
              />
            );
          })}
        </span>
        <button
          className="btn btn-secondary px-5 mx-5 my-3"
          onClick={handleAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
