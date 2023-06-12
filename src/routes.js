import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import TourPage from './pages/User';
import HotelPage from './pages/Product';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import UserPage from './pages/UserPage';
import NewUser from './pages/newUser/NewUser';
import NewProduct from './pages/newProduct/NewProduct';
import NewLaptop from './pages/newLaptop/NewLaptop';
import NewKeyboad from './pages/newKeyboad/NewKeyboad';
import NewMouse from './pages/newMouse/NewMouse';
import NewGamepad from './pages/newGamepad/NewGamepad';
import NewHeadphone from './pages/newHeadphone/NewHeadphone';
import User from './pages/User';
import EditUser from './pages/EditUser/EditUser';
import Products from './pages/Product';
import Laptop from './pages/Laptop/Laptop';
import Mouse from './pages/Mouse/Mouse';
import Gamepad from './pages/GamePad/Gamepad';
import Keyboard from './pages/Keyboard/Keyboard';
import Headphone from './pages/Headphone/Headphone';
import Discount from './pages/Discount';
import EditDiscount from './pages/EditDiscount/EditDiscount';
import NewDiscount from './pages/newDiscount/NewDiscount';
import NewComment from './pages/newComment/NewComment';
import Comment from './pages/Comment';
import Order from './pages/Order';
import EditComment from './pages/EditComment/EditComment';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'keyboard', element: <NewKeyboad /> },
        { path: 'product', element: <HotelPage /> },
        { path: 'newuser', element: <NewUser /> },
        { path: 'newproduct', element: <NewProduct /> },
        { path: 'laptop', element: <NewLaptop /> },
        { path: 'mouse', element: <NewMouse /> },
        { path: 'gamepad', element: <NewGamepad /> },
        { path: 'headphone', element: <NewHeadphone /> },
        { path: 'editlaptop', element: <Laptop /> },
        { path: 'editmouse', element: <Mouse /> },
        { path: 'editgamepad', element: <Gamepad /> },
        { path: 'editkeyboard', element: <Keyboard /> },
        { path: 'editheadphone', element: <Headphone /> },
        { path: 'edituser', element: <EditUser /> },
        { path: 'discount', element: <Discount /> },
        { path: 'editdiscount', element: <EditDiscount /> },
        { path: 'newdiscount', element: <NewDiscount /> },
        { path: 'comment', element: <Comment /> },
        { path: 'newcomment', element: <NewComment /> },
        { path: 'editcomment', element: <EditComment /> },
        { path: 'order', element: <Order /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
