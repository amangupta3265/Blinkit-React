import React from "react";
import ProductCategory from "../../atoms/productCategory/";
import lodash from "lodash";
import PropTypes from "prop-types";
import styles from "./productCategoriesNavbar.module.css";

class ProductCategoriesNavbar extends React.Component {
  render() {
    const { productcategories, changeProductcategory } = this.props;

    const listItems = productcategories.map((productcategory, id) => {
      return (
        <ProductCategory
          key={id}
          id={id}
          productcategory={productcategory}
          changeProductcategory={changeProductcategory}
        />
      );
    });

    return <ul className={styles.productcategoriesNavbar}> {listItems}</ul>;
  }
}

ProductCategoriesNavbar.defaultTypes = {
  changeProductcategory: lodash.noop,
  productcategories: [],
};

ProductCategoriesNavbar.propTypes = {
  changeProductcategory: PropTypes.func,
  productcategories: PropTypes.array,
};

export default ProductCategoriesNavbar;
