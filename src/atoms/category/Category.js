import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import styles from "./category.module.css";

function Category(props) {
  const { changeCategory, categoryId, categoryName } = props;

  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  console.log("gotoHomePage", gotoHomePage);
  return (
    <li
      className={classNames(styles["categories__category"], {
        [styles["categories__more"]]: categoryName === "More",
      })}
      onClick={() => {
        gotoHomePage();
        changeCategory(categoryId);
      }}
    >
      {categoryName}
      {categoryName === "More" && (
        <ul className={styles.dropdown}>
          <li className={styles.dropdown__category}>Sweet Tooth</li>
          <li className={styles.dropdown__category}>Atta, Rice & Dal</li>
          <li className={styles.dropdown__category}>
            Dry Fruits, Masala & Oil
          </li>
          <li className={styles.dropdown__category}>Sauces & Spreads</li>
          <li className={styles.dropdown__category}>Chicken, Meat & Fish</li>
          <li className={styles.dropdown__category}>Paan Corner</li>
          <li className={styles.dropdown__category}>Organic & Premium</li>
        </ul>
      )}
    </li>
  );
}

Category.defaultProps = {
  categoryName: undefined,
  categoryId: undefined,
  changecategory: lodash.noop,
};

Category.propTypes = {
  categoryName: PropTypes.string,
  categoryId: PropTypes.number,
  changecategory: PropTypes.func,
};

export default Category;
