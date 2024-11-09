import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import About from './components/About';
import AllGadgets from './components/AllGadgets';
import Chargers from './components/Chargers';
import GadgetDetails from './components/GadgetDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("../categories.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("../data.json"),
            element: <AllGadgets></AllGadgets>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("../data.json"),
            element: <AllGadgets></AllGadgets>,
          },
          {
            path: "/chargers",
            element: <Chargers></Chargers>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>
          },
        ]
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/gadget/:gadgetId",
        loader:()=> fetch(`/data.json`),
        element: <GadgetDetails></GadgetDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
