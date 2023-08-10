import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cities from "./pages/Cities";
import Citydetail from "./pages/Citydetail";

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
        path: "/citydetail",
        element: <Citydetail />,
      },
    ],
  },
]);
export default router;
