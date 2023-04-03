import React from "react";
import AdvantageCard from "../../atoms/advantageCard/";
import styles from "./advantages.module.css";
import classNames from "classnames";

function Advantages() {
  const advantages = [
    {
      img: "./images/fast dilevery.webp",
      heading: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
    {
      img: "./images/deliver-icon-earnings.webp",
      heading: "Best Prices & Offers",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
    {
      img: "./images/wide adorments.webp",
      heading: "Wide Assortment",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you",
    },
  ];

  const AdvantageCards = advantages.map((advantage, id) => (
    <AdvantageCard key={id} advantage={advantage} />
  ));

  return (
    <div className={classNames(styles.advantages, styles.flexRow)}>
      {AdvantageCards}
    </div>
  );
}

export default Advantages;
