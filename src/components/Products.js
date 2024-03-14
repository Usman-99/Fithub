import "./Products.css";
import card from "./CardsData";
import ProductCard from "./ProductCard";
export default function Products() {
  return (
    <>
      <section id="man" className="">
        <div className="app">
          <h1>GYM STORE</h1>
          {card.length > 0 ? (
            <div className="container">
              {card.map((card, i) => (
                <ProductCard product={card} key={i} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>NO Products FOUND</h2>{" "}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
