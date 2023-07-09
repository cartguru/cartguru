const CATEGORIES_PATH = "/categories";
const CATEGORY_PATH = "/categories/:id";

export { CATEGORIES_PATH, CATEGORY_PATH };

const getHomePath = () => "/categories";

const getCategoryPath = (id: string) => `/categories/${id}`;

export { getHomePath, getCategoryPath };
