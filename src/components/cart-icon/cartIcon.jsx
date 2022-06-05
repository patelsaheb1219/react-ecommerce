import React from "react";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cartIcon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} />
      <span className="cart-count">5</span>
    </div>
  );
};

export default CartIcon;
