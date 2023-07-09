import { Component, For } from "solid-js";

import Grid from "components/Grid";
import Product from "components/Product";

type ProductsProps = { products: Product[] };

const Products: Component<ProductsProps> = (props) => (
  <Grid>
    <For each={props.products}>{Product}</For>
  </Grid>
);

export default Products;
