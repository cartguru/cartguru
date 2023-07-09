import { Component } from "solid-js";

import Link from "components/Link";

import styles from "./Category.module.css";
import { getCategoryPath } from "routes";

type Category = { id: number; name: string };

const Category: Component<Category> = (props) => (
  <Link to={getCategoryPath(props.id.toString())}>
    <div class={styles.Category}>
      <span class={styles.Category__name}>{props.name}</span>
    </div>
  </Link>
);

export default Category;
