import React from "react";
import "./product.css";
import { useContext } from "react";
import { cartContext } from "./cartContext";

export const Product = ({ product }) => {

  const {cart, setCart} = useContext(cartContext);

  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + "..."
      : product.name;

  // Use some to check if the product is in the cart based on its id
  const isProductInCart = cart.some((c) => c.id === product.id);

  const addCart = () => {
    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>1Kg</p>
        <p>Price Rs: {product.amount}</p>
        {isProductInCart ? (
          <button onClick={removeCart} className="removeBtn">
            Remove from Cart
          </button>
        ) : (
          <button onClick={addCart} className="addBtn">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
