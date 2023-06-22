import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productButton.module.css";

class ProductButton extends Component {
  displayCounter = () => {
    this.props.addItemInCart(this.props.product);
  };

  render() {
    const { count, addItemInCart, removeItemInCart, product, showCounter } =
      this.props;

    return (
      <div className="product__quantity">
        <button
          className={classNames({
            [styles["product__quantity__button"]]: true,
            [styles["btn-add"]]: true,
            [styles["displayNone"]]: showCounter,
            [styles["displayBlock"]]: !showCounter,
          })}
          id={styles["btn-add"]}
          onClick={this.displayCounter}
        >
          ADD
        </button>
        <button
          className={classNames({
            [styles["product__quantity__button"]]: true,
            [styles["btn-number"]]: true,
            [styles["displayBlock"]]: showCounter,
            [styles["displayNone"]]: !showCounter,
          })}
          id={styles["btn-number"]}
        >
          <span
            className={styles.decrementQuantity}
            id="decrement"
            onClick={() => removeItemInCart(product)}
          >
            -
          </span>
          <span id="count_0">{count}</span>
          <span
            className={styles.incrementQuantity}
            id="increment"
            onClick={() => addItemInCart(product)}
          >
            +
          </span>
        </button>
      </div>
    );
  }
}

ProductButton.defaultTypes = {
  count: undefined,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  showCounter: false,
  product: {},
};

ProductButton.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  showCounter: PropTypes.bool,
  product: PropTypes.object,
};

export default ProductButton;
