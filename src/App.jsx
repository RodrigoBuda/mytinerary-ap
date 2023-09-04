import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store ={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
