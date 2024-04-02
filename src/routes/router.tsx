import { createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { CategoriesPage } from './CategoriesPage';
import { ProductsPage } from './ProductsPage';
import { ProductPage, loader as productLoader } from './ProductPage';

export const routes = {
  categories: '/categories',
  get category() {
    return `${this.categories}/id`;
  },
  products: '/products',
  get product() {
    return `${this.products}/:id`;
  },
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: routes.categories,
        element: <CategoriesPage />,
      },
      {
        path: routes.product,
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: routes.products,
        element: <ProductsPage />,
      },
    ],
  },
]);
