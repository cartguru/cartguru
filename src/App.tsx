import { lazy, type Component } from "solid-js";
import { Routes, Route, Navigate, A } from "@solidjs/router";

const CategoriesPage = lazy(() => import("pages/Categories"));
const CategoryPage = lazy(() => import("pages/Category"));

import Link from "components/Link";

import styles from "./App.module.css";

import { CATEGORIES_PATH, CATEGORY_PATH, getHomePath } from "routes";

const App: Component = () => (
  <>
    <Link to={getHomePath()}>
      <h1 class={styles.App__title}>Cart Guru</h1>
    </Link>

    <Routes>
      <Route path="/" element={<Navigate href={CATEGORIES_PATH} />} />
      <Route path={CATEGORIES_PATH} component={CategoriesPage} />
      <Route path={CATEGORY_PATH} component={CategoryPage} />
    </Routes>
  </>
);

export default App;
