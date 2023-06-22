import React from "react";
import AboutBlinkit from "../../atoms/aboutBlinkit";
import Advantages from "../../molecules/advantages/";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import Footer from "../../molecules/footer";
import TopNavbar from "../../molecules/topNavbar";
import CartBilling from "./molecules/cartBilling";
import CheckoutProduct from "./molecules/checkoutProduct/";
import PlaceOrderHeader from "./molecules/placeOrderHeader";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./checkout.module.css";
import classNames from "classnames";

function Checkout(props) {
  const { cartInfo, addItemInCart, removeItemInCart, productData } = props;

  const cartData = cartInfo.cartData;

  let checkoutProducts = [];

  const mrpPrice = parseInt(cartInfo.mrpPrice);
  const actualPrice = parseInt(cartInfo.actualPrice),
    dileveryCharge = parseInt(cartInfo.dileveryCharge),
    totalCount = parseInt(cartInfo.totalCount);

  cartData.forEach((value, key) => {
    checkoutProducts.push(
      <CheckoutProduct
        key={key}
        product={value}
        addItemInCart={addItemInCart}
        removeItemInCart={removeItemInCart}
        productData={productData}
      />
    );
  });

  return (
    <>
      <TopNavbar
        cartItemsCount={cartInfo.cartItemsCount}
        cartItemsValue={cartInfo.cartItemsValue}
        displayCartItems={cartInfo.displayCartItems}
      />

      <CategoriesNavbar />
      <div className={classNames(styles.productsContainer, styles.flexColumn)}>
        <PlaceOrderHeader totalCount={totalCount} />
        <div className={styles.checkoutProducts}>{checkoutProducts}</div>
        <CartBilling
          actualPrice={actualPrice}
          mrpPrice={mrpPrice}
          dileveryCharge={dileveryCharge}
          totalCount={totalCount}
        />
      </div>
      <Advantages />
      <AboutBlinkit />
      <Footer />
    </>
  );
}

Checkout.defaultProps = {
  cartInfo: {},
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
};

Checkout.propTypes = {
  cartInfo: PropTypes.object,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
};

export default Checkout;
