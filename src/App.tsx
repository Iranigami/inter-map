import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Main from "./Pages/Main";
import OurCity from "./Pages/OurCity";
import HeroCity from "./Pages/HeroCity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/our-city" element={<OurCity />} />
        <Route path="/hero-city" element={<HeroCity />} />
      </Routes>
    </Router>
  );
}

export default App;
