import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Rooms from "./assets/pages/Rooms";
import Events from "./assets/pages/Events";
import Gallery from "./assets/pages/Gallery";
import Contact from "./assets/pages/Contact";

// NEW cinematic imports
import CinematicLoader from "./assets/components/CinematicLoader";
import CinematicExtras from "./assets/components/CinematicExtras";
import useScrollReveal from "./assets/hooks/useScrollReveal";
import "./assets/styles/cinematic.css";

function AppContent() {
  const location = useLocation();

  // Re-run scroll reveal whenever the route changes
  useScrollReveal(location.pathname);

  return (
    <>
      <CinematicLoader />
      <CinematicExtras />
      <Header />
      <main key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
