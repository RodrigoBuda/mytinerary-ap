import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cities from "./pages/Cities";  
import Citydetail from "./pages/Citydetail"; 
import FormSignUp from "./pages/FormSignUp"
import FormSignIn from "./pages/FormSignIn"

import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/index",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/city/:city_id",
        element: <Citydetail />,
      },
      {
        path: "/auth/signup",
        element: <FormSignUp />,
      },
      {
        path: "/auth/signin",
        element: <FormSignIn />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
