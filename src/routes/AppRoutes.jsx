import { Routes, Route} from "react-router-dom"
import ROUTES from "../utils/routes"
import LandingPage from "../pages/LandingPage/LandingPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import MainAppPage from "../pages/MainAppPage/MainAppPage"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LANDINGPAGE} element={<LandingPage/>}></Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}></Route>
        <Route path={ROUTES.REGISTER} element={<RegisterPage/>}></Route>
        <Route path={ROUTES.TODOAPP} element={<MainAppPage/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes