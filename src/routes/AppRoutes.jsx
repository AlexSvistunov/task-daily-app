import { Routes, Route} from "react-router-dom"
import ROUTES from "../utils/routes"
import LandingPage from "../pages/LandingPage/LandingPage"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LANDINGPAGE} element={<LandingPage/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes