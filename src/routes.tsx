import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
