import { Component } from "solid-js";

import styles from "./Product.module.css";

type Product = { name: string; imageUrl: string; targetUrl: string };

const Product: Component<Product> = (props) => (
  <div>
    <img class={styles.Product__img} src={props.imageUrl} />

    <div class={styles.Product__name}>{props.name}</div>

    <button
      class={styles.Product__btn}
      onClick={() => (window.location.href = props.targetUrl)}
    >
      Buy
    </button>
  </div>
);

export default Product;
