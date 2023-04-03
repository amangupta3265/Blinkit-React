import React from "react";
import TopNavbar from "../../molecules/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";

import ProductsContainer from "./organisms/productsContainer";
import AboutBlinkit from "../../atoms/aboutBlinkit";
import Footer from "../../molecules/footer";
import Advantages from "../../molecules/advantages/";
import ErrorBoundary from "../../helpers/errorBoundary";
import PropTypes from "prop-types";
import lodash from "lodash";

function Home(props) {
  const {
    categoryId,
    addItemInCart,
    removeItemInCart,
    changeCategory,
    cartItemsCount,
    cartItemsValue,
    displayCartItems,
    productData,
  } = props;

  return (
    <>
      <TopNavbar
        cartItemsCount={cartItemsCount}
        cartItemsValue={cartItemsValue}
        displayCartItems={displayCartItems}
      />

      <CategoriesNavbar changeCategory={changeCategory} />

      <ErrorBoundary>
        <ProductsContainer
          categoryId={categoryId}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
          productData={productData}
        />
      </ErrorBoundary>
      <Advantages />
      <AboutBlinkit />
      <Footer />
    </>
  );
}

Home.defaultProps = {
  cartInfo: {},
  categoryId: 0,
  changeCategory: lodash.noop,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  productData: {},
};

Home.propTypes = {
  cartInfo: PropTypes.object,
  categoryId: PropTypes.number,
  changeCategory: PropTypes.func,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  productData: PropTypes.object,
};

export default Home;
