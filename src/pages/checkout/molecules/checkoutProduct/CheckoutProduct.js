import React from "react";
import ProductButton from "../../../../atoms/productButton";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./checkoutProduct.module.css";
import classNames from "classnames";

function CheckoutProduct(props) {
  // console.log(this.props);
  let showCounter = false;

  const { product, productData, addItemInCart, removeItemInCart } = props;
  let productId = product["product__id"];
  let productCount = 0;

  if (productData.get(productId)) {
    productCount = productData.get(productId);
    console.log("productCount", productCount);
    showCounter = true;
  }

  const Product = (
    <div className={classNames(styles.checkout__product, styles.flexRow)}>
      <div className={styles.flexRow}>
        <div className={styles.product__image}>
          <div className={styles.product__offer}>{product.product__offer}</div>
          <img src={product.product__image} alt="" />
        </div>
        <div>
          <div
            className={classNames(
              styles.product__name,
              styles.checkoutProduct__name
            )}
          >
            {product.product__name}
          </div>
          <div className={styles.product__weight}>
            {product.product__weight}
          </div>
          <div className={styles.product__details}>
            <div
              className={classNames(
                styles.product__price,
                styles.checkoutProduct__price
              )}
            >
              <span
                className={classNames(
                  styles.product__newPrice,
                  styles.boldText
                )}
              >
                <span>&#8377;</span>
                <span>{product.product__newPrice}</span>
              </span>
              <span className={styles.product__oldPrice}>
                <span>&#8377;</span>
                <span>{product.product__oldPrice}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProductButton
        showCounter={showCounter}
        addItemInCart={addItemInCart}
        removeItemInCart={removeItemInCart}
        count={productCount}
        product={product}
      />
    </div>
  );
  return Product;
}

CheckoutProduct.defaultProps = {
  product: {},
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
};

CheckoutProduct.propTypes = {
  product: PropTypes.object,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
};

export default CheckoutProduct;
