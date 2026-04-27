import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
   <BrowserRouter >
   <div className=" text-white min-h-screen 
">
   <Navbar />
   <Routes>
      <Route path="/" element={<Hero/>} />
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