import React, { useContext } from "react";
import { storeContext } from "../Context and Reduce/StoreContext";
import CartProduct from "./CartProduct";

export default function Cart() {
  const { products, total } = useContext(storeContext);

  return (
    <div className="w-full max-w-3xl mx-auto mb-5">
      <div className="flex flex-col items-center justify-center mt-2 py-6 px-4 sm:px-10 text-xl font-medium">
        {products.length > 0 ? (
          <>
            <h3 className="text-center bg-transparent text-black text-3xl mb-4">
              Your Basket
            </h3>
            <p className="text-center">Total: Rs {total.toFixed(2)}</p>
          </>
        ) : (
          <h2 style={{ marginBottom: "83%" }} className="text-center mt-2 py-6">
            No Items are added in cart!!
          </h2>
        )}
      </div>
      {products.map((product, i) => (
        <CartProduct key={i} item={product} />
      ))}
    </div>
  );
}
