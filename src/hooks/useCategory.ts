import useCategories from "./useCategories";

const useCategory = (id: number) => {
  const categories = useCategories();

  return categories.find((category) => category.id === id);
};

export default useCategory;
