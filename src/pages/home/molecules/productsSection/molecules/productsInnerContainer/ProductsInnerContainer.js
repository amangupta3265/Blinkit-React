import React from "react";
import Product from "../product";
import PropTypes from "prop-types";
import styles from "./productsInnerContainer.module.css";
import classNames from "classnames";

function ProductsInnerContainer(props) {
  const { products, productData, addItemInCart, removeItemInCart } = props;

  const productsArray = products.map((product, id) => {
    return (
      <Product
        product={product}
        key={id + props.productcategory}
        addItemInCart={addItemInCart}
        removeItemInCart={removeItemInCart}
        productData={productData}
      />
    );
  });

  return (
    <div className={classNames(styles.products, styles.flexRow)}>
      {productsArray}{" "}
    </div>
  );
}

ProductsInnerContainer.propTypes = {
  products: PropTypes.array,
  productcategory: PropTypes.string,
  category: PropTypes.string,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
};

export default ProductsInnerContainer;
