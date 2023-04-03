import React from "react";
import Category from "../../atoms/category";
import categoriesData from "../../data/categories.json";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./categoriesNavbar.module.css";
import classNames from "classnames";

function CategoriesNavbar(props) {
  const categories = categoriesData;

  const { changeCategory } = props;

  const listItems = categories.map((category, id) => {
    return (
      <Category
        key={id}
        categoryName={category}
        categoryId={id}
        changeCategory={changeCategory}
      />
    );
  });

  return (
    <ul className={classNames(styles.categories, styles.flexRow)}>
      {listItems}
    </ul>
  );
}

CategoriesNavbar.defaultProps = {
  changeCategorie: lodash.noop,
};

CategoriesNavbar.propTypes = {
  changeCategorie: PropTypes.func,
};

export default CategoriesNavbar;
