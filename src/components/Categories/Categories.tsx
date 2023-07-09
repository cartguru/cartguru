import { Component, For } from "solid-js";

import Category from "components/Category";
import Grid from "components/Grid";

type CategoriesProps = { categories: Category[] };

const Categories: Component<CategoriesProps> = (props) => (
  <Grid>
    <For each={props.categories}>
      {(category) => <Category {...category} />}
    </For>
  </Grid>
);

export default Categories;
