import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Checkout from "./pages/checkout";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: 0,
      cartData: new Map(),
      productData: new Map(),
    };
  }

  changeCategory = (categoryId) => {
    console.log("category got changed", categoryId);

    this.setState({
      categoryId: categoryId,
    });
  };

  addItemInCart = (product) => {
    if (!this.state.displayCartItems) {
      this.setState({
        displayCartItems: true,
      });
    }

    let cartData = this.state.cartData;
    const id = product["product__id"];
    cartData.set(id, product);

    let productData = this.state.productData;

    if (productData.get(id)) {
      let count = parseInt(productData.get(id));
      productData.set(id, count + 1);
    } else {
      productData.set(id, 1);
    }

    this.setState({
      cartData: cartData,
      productData: productData,
    });
  };

  removeItemInCart = (product) => {
    let cartData = this.state.cartData;
    const id = product["product__id"];
    cartData.set(id, product);

    let productData = this.state.productData;
    //let productCount= parseInt(product["count"])+1;
    let count = parseInt(productData.get(id));
    if (count === 1) {
      console.log("delete", id);
      productData.delete(id);
      cartData.delete(id);
    } else {
      productData.set(id, count - 1);
    }

    this.setState({
      cartData: cartData,
      productData: productData,
    });
  };

  render() {
    const { cartData, productData, categoryId } = this.state;

    let mrpPrice = 0,
      actualPrice = 0,
      cartItemsCount = 0,
      totalCount = cartItemsCount,
      cartItemsValue = 0;

    console.log("App render", cartData);

    productData.forEach((value, key) => {
      const product = cartData.get(key);
      actualPrice += parseInt(product["product__newPrice"]) * parseInt(value);
      mrpPrice += parseInt(product["product__oldPrice"]) * parseInt(value);
      cartItemsValue = actualPrice;
      cartItemsCount += parseInt(value);
    });

    let displayCartItems = false;

    if (cartData.size > 0) displayCartItems = true;

    let cartInfo = {
      mrpPrice,
      actualPrice,
      cartItemsValue,
      totalCount,
      cartItemsCount,
      displayCartItems,
      cartData,
    };

    return (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categoryId={categoryId}
              changeCategory={this.changeCategory}
              cartItemsCount={cartItemsCount}
              cartItemsValue={cartItemsValue}
              displayCartItems={displayCartItems}
              addItemInCart={this.addItemInCart}
              removeItemInCart={this.removeItemInCart}
              productData={productData}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartInfo={cartInfo}
              addItemInCart={this.addItemInCart}
              removeItemInCart={this.removeItemInCart}
              productData={productData}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
