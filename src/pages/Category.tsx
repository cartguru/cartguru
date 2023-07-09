import { useParams } from "@solidjs/router";

import Products from "components/Products";

import useCategory from "hooks/useCategory";

const CategoryPage = () => {
  const params = useParams<{ id: string }>();
  const category = useCategory(+params.id)!;

  return <Products products={category.products} />;
};

export default CategoryPage;
