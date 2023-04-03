import React from "react";
import ProductsInnerContainer from "./molecules/productsInnerContainer";
import ProductsSectionHeading from "./molecules/productsSectionHeading";
import PropTypes from "prop-types";
import { sortProducts } from "../../helpers/sortProducts";
import lodash from "lodash";
import styles from "./productsSection.module.css";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  handleSortProducts = (event) => {
    const { products } = this.state;

    let sortedProducts = sortProducts(event, products);

    this.setState({
      products: sortedProducts,
    });
  };

  render() {
    const {
      products,
      productcategory,
      category,
      addItemInCart,
      removeItemInCart,
      productData,
    } = this.props;

    console.log("from productSection", category);

    return (
      <div className={styles.productsSection}>
        <ProductsSectionHeading sortProducts={this.handleSortProducts} />
        <ProductsInnerContainer
          products={products}
          productcategory={productcategory}
          category={category}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
          productData={productData}
        />
      </div>
    );
  }
}

ProductSection.defaultProps = {
  products: {},
  productcategory: undefined,
  category: undefined,
  productcategoryId: undefined,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
};

ProductSection.propTypes = {
  products: PropTypes.array,
  productcategory: PropTypes.string,
  category: PropTypes.string,
  productcategoryId: PropTypes.number,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
};

export default ProductSection;
