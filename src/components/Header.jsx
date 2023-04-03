import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ counter }) => {
  return (
    <div className="header bg-header ">
      <Link to={`/`} className="without-style">
        <div className="align-content">
          <h1>TechTravel</h1>
          <img
            className="imgContent"
            src={process.env.PUBLIC_URL + "logo.svg"}
            alt="imagen"
          />
        </div>
      </Link>

      <div className="align-content">
        <div className="circle">
          <p className="alignd-circle">{counter}</p>
        </div>
        <Link to={`purchase`}>
          <img
            className="imgContent"
            src={process.env.PUBLIC_URL + "carrito.svg"}
            alt="imagen"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
