import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import NavBar from "./layout/navBar";
import Footer from "./layout/footer";
import Home from "./pages/home";
import { ROUTES } from "./components/constants/routes";
import Services from "./pages/services";
import Careers from "./pages/careers";
import Accomodation from "./pages/accomodation";
import AboutUs from "./pages/aboutUs";
import PrivateRoom from "./pages/privateRoom";
import RoomDetails from "./components/services/accomodationFacilities/roomDetails";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.WHAT_WE_OFFER} element={<Services />} />
        <Route path={ROUTES.PRIVATE_ROOM} element={<PrivateRoom />} />
        <Route path={ROUTES.ROOM_DETAILS} element={<RoomDetails />} />
        <Route
          path={`${ROUTES.WHAT_WE_OFFER}/:serviceType`}
          element={<Services />}
        />
        <Route path={ROUTES.ACCOMODATION} element={<Accomodation />} />
        <Route path={ROUTES.CAREERS} element={<Careers />} />
        <Route path={`${ROUTES.CAREERS}/:careerType`} element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
