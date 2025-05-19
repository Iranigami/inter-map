import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Map from "./Pages/Map";
import OurCity from "./Pages/OurCity";
import HeroCity from "./Pages/HeroCity";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />}/>
        <Route path="/map" element={<Map />} />
        <Route path="/our-city" element={<OurCity />} />
        <Route path="/hero-city" element={<HeroCity />} />
      </Routes>
    </Router>
  );
}

export default App;
