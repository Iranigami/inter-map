import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Main from "./Pages/Main";
import OurCity from "./Pages/OurCity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Main />} />
        <Route path="/our-city" element={<OurCity />} />
      </Routes>
    </Router>
  );
}

export default App;
