import { ServicesCard } from "./components/cards";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
// import pics from "../public/images/services/lawyer.jpg"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="contact" element={<Contact />} />
        <Route path="aboutus" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
