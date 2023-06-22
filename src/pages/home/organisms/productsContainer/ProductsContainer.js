import React from "react";
import ProductCategoriesNavbar from "../../molecules/productCategoriesNavbar";
import ProductSection from "../../molecules/productsSection";
import categories from "../../../../data/categories.json";
import { getProducts } from "../../helpers/getProducts";
import { getProductCategories } from "../../helpers/getProductCategories";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productsContainer.module.css";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productcategoryId: 0,
      categoryId: 0,
    };
  }

  changeProductcategory = (e, productcategoryId) => {
    this.setState({
      productcategoryId: productcategoryId,
    });
  };

  componentDidUpdate() {
    const categoryId = this.props.categoryId;
    if (categoryId !== this.state.categoryId) {
      this.setState({
        categoryId: this.props.categoryId,
        productcategoryId: 0,
      });
    }
  }

  render() {
    const { addItemInCart, removeItemInCart, productData, categoryId } =
      this.props;

    const category = categories[this.props.categoryId];
    let productcategoryId = parseInt(this.state.productcategoryId);

    if (categoryId !== this.state.categoryId) {
      productcategoryId = 0;
    }

    const productcategories = getProductCategories(category);

    const products = getProducts(category, productcategoryId);

    const productcategory =
      productcategories[productcategoryId]["productCategory__name"];

    return (
      <div className={styles.productsContainer}>
        <ProductCategoriesNavbar
          changeProductcategory={this.changeProductcategory}
          productcategories={productcategories}
        />
        <ProductSection
          products={products}
          productcategory={productcategory}
          category={category}
          productcategoryId={productcategoryId}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
          productData={productData}
        />
      </div>
    );
  }
}

ProductsContainer.defaultProps = {
  categoryId: 0,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  productData: {},
};

ProductsContainer.propTypes = {
  categoryId: PropTypes.number,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  productData: PropTypes.object,
};

export default ProductsContainer;
