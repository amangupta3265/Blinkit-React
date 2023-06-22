import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./myCart.module.css";
import classNames from "classnames";

function MyCart(props) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const { displayCartItems, cartItemsCount, cartItemsValue } = props;

  return (
    <button
      className={classNames(styles.myCart, styles.flexRow)}
      onClick={handleCheckout}
    >
      <span className={styles.shoppingIcon}>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span>
        <div style={{ display: displayCartItems ? "none" : "block" }}>
          My Cart
        </div>
        <div style={{ display: displayCartItems ? "block" : "none" }}>
          <div>{cartItemsCount} items</div>
          <div>
            <span>&#8377;</span>
            {cartItemsValue}
          </div>
        </div>
      </span>
    </button>
  );
}

MyCart.defaultProps = {
  displayCartItems: false,
  cartItemsCount: undefined,
  cartItemsValue: undefined,
};

MyCart.propTypes = {
  displayCartItems: PropTypes.bool,
  cartItemsCount: PropTypes.number,
  cartItemsValue: PropTypes.number,
};

export default MyCart;
