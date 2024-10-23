import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Brands from './components/Brands/Brands';
import Product from './components/Product/Product';  // Corrected path
import Profile from './components/Profile/Profile';
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Register from './components/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const routers = createBrowserRouter([
    {
      path: '', // Base path
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },    // Home route
        { path: 'product', element: <Product /> },  // Product route
        { path: 'brands', element: <Brands /> },  // Brands route
        { path: 'categories', element: <Categories /> },   
        { path: 'cart', element: <Cart /> }, 
        { path: 'profile', element: <Profile /> },  
        { path: 'register', element: <Register/> },  
        { path: '*', element: <NotFoundPage /> },  
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
