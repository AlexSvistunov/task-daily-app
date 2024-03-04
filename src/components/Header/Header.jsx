import ROUTES from "../../utils/routes";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

const Header = () => {
  const { isAuth, email } = useAuth();
  // если пользователь авторизован, то функционал выйти с аккаунта,
  // если не авторизован, то кнопки Register and Login
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="logo header__logo" to={ROUTES.LANDINGPAGE}></Link>

        {isAuth ? (
          <div>{email}</div>
        ) : (
          <div className="header__links">
            <Link
              className="header__link header__link--register"
              to={ROUTES.REGISTER}
            >
              Register
            </Link>
            <Link
              className="header__link header__link--login"
              to={ROUTES.LOGIN}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
