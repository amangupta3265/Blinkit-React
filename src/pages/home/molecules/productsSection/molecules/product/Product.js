import React from "react";
import ProductButton from "../../../../../../atoms/productButton";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./product.module.css";

function Product(props) {
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
    <div className={styles.products__product}>
      <div className={styles.product__image}>
        <div className={styles.product__offer}>{product.product__offer}</div>
        <img src={product.product__image} alt="" />
        <div className={styles.product__sourced}>
          {product.product__sourced}
        </div>
      </div>
      <div className={styles.product__name}>{product.product__name}</div>
      <div className={styles.product__weight}>{product.product__weight}</div>
      <div className={styles.product__details}>
        <div className={styles.product__price}>
          <span className={styles.product__newPrice}>
            ₹{product.product__newPrice}
          </span>
          <span className={styles.product__oldPrice}>
            ₹{product.product__oldPrice}
          </span>
        </div>
        <ProductButton
          showCounter={showCounter}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
          count={productCount}
          product={product}
        />
      </div>
    </div>
  );
  return Product;
}

Product.defaultProps = {
  product: {},
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  productData: {},
};

Product.propTypes = {
  product: PropTypes.object,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  productData: PropTypes.object,
};

export default Product;
