import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;