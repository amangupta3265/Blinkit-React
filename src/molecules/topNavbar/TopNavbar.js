import React from "react";
import DeliveryHead from "../../atoms/deliveryHead";
import LoginBtn from "../../atoms/loginBtn";
import Logo from "../../atoms/logo";
import MyCart from "../../atoms/myCart";
import PropTypes from "prop-types";
import styles from "./topNavbar.module.css";
import classNames from "classnames";

function TopNavbar(props) {
  const { displayCartItems, cartItemsCount, cartItemsValue } = props;

  return (
    <div className={classNames(styles.topNavbar, styles.flexRow)}>
      <div className={classNames(styles.topNavbar__left, styles.flexRow)}>
        <Logo />
        <DeliveryHead />
      </div>

      <div
        className={classNames(
          styles.topNavbar__right,
          styles.flexRow,
          styles.paddingTopBottom10px
        )}
      >
        <LoginBtn />
        <MyCart
          displayCartItems={displayCartItems}
          cartItemsCount={cartItemsCount}
          cartItemsValue={cartItemsValue}
        />
      </div>
    </div>
  );
}

TopNavbar.defaultProps = {
  displayCartItems: false,
  cartItemsCount: undefined,
  cartItemsValue: undefined,
};

TopNavbar.propTypes = {
  displayCartItems: PropTypes.bool,
  cartItemsCount: PropTypes.number,
  cartItemsValue: PropTypes.number,
};

export default TopNavbar;
