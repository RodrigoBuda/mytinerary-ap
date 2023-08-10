import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="cont-footer">
        <h3 className="h3-footer">MyTinerary</h3>
        <div className="cont-iconos-footer">
          <a>
            <BsInstagram />
          </a>
          <a>
            <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
