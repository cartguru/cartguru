import Categories from "components/Categories";

import useCategories from "hooks/useCategories";

const CategoriesPage = () => {
  const categories = useCategories();

  return <Categories categories={categories} />;
};

export default CategoriesPage;
