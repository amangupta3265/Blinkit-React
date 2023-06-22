import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productCategory.module.css";

function ProductCategory(props) {
  const productCategory = (
    <li
      className={classNames(
        styles.productCategory,
        styles.flexRow,
        styles["productcategoriesNavbar__category"],
        {
          [styles["productCategory__active"]]: props.id === 0,
        }
      )}
      //id={styles["productcategoriesNavbar__category"]}
      onClick={(e) => props.changeProductcategory(e, props.id, productCategory)}
    >
      <img
        className={styles.productCategory__image}
        src={props.productcategory["productCategory__image"]}
        alt={props.productcategory["productCategory__name"]}
      />

      <span className={styles.productCategory__name}>
        {props.productcategory["productCategory__name"]}
      </span>
    </li>
  );

  return productCategory;
}

ProductCategory.defaultProps = {
  id: undefined,
  productcategory: {},
  changeProductcategory: lodash.noop,
};

ProductCategory.propTypes = {
  id: PropTypes.number,
  productcategory: PropTypes.object,
  changeProductcategory: PropTypes.func,
};

export default ProductCategory;
