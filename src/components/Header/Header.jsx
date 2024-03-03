import ROUTES from "../../utils/routes";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link className="logo header__logo" to={ROUTES.LANDINGPAGE}></Link>
      </div>
    </header>
  );
};

export default Header;
