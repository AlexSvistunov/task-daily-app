import ROUTES from "../../utils/routes";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(removeUser())
  }

  // если пользователь авторизован, то функционал выйти с аккаунта,
  // если не авторизован, то кнопки Register and Login
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="logo header__logo" to={ROUTES.LANDINGPAGE}></Link>

        {isAuth ? (
          <div style={{display: 'flex', gap: '20px'}}>
            <div>{email}</div>
            <button onClick={logOutHandler}>Log out</button>
          </div>
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
