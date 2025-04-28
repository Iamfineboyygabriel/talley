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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.WHAT_WE_OFFER} element={<Services />} />
        <Route
          path={`${ROUTES.WHAT_WE_OFFER}/:serviceType`}
          element={<Services />}
        />
        <Route path={ROUTES.ACCOMODATION} element={<Accomodation />} />
        <Route path={ROUTES.CAREERS} element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
