import Footer from "../components/Footer";
import NavLayout from "./NavLayout";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="cont-navlayout">
        <NavLayout />

        {/*ACA SE DEBE INSERTAR EL CONTENIDO DINNAMICO DE CADA VISTA*/}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
