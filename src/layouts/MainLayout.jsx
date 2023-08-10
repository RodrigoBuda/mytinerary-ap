import Footer from "../components/Footer";
import NavLayout from "./NavLayout";

export default function MainLayout({ children }) {
  console.log(children);
  return (
    <>
      <div className="cont-navlayout">
        <NavLayout />
        {children}
        {/*ACA SE DEBE INSERTAR EL CONTENIDO DINNAMICO DE CADA VISTA*/}

        <Footer />
      </div>
    </>
  );
}
