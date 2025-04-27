import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/errorPage/ErrorPage';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
