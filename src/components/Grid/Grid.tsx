import { ParentComponent } from "solid-js";

import styles from "./Grid.module.css";

const Grid: ParentComponent = (props) => (
  <div class={styles.Grid}>{props.children}</div>
);

export default Grid;
