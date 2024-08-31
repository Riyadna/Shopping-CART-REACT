import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./Viewcart.css";
import { cartContext } from "./cartContext";

export const Viewcart = () => {

  const {cart, setCart} = useContext(cartContext);

  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=>acc+parseInt(curr.amount),0));
  },[cart])

  const removeCart = (product) => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product">
            <div className="img">
              <img src={product.pic} alt="image" />
            </div>
            <div className="cart-product-detail">
              <h3>{product.name}</h3>
              <p>1Kg</p>
              <p>Price Rs: {product.amount}</p>
            </div>
            <button onClick={()=>removeCart(product)}>Remove from cart</button>
          </div>
        ))}
      </div>
      <h2 className="cart-amt">Total Amount Rs: {total}</h2>
    </>
  );
};
