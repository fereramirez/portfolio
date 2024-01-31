import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { LanguageProvider } from "./context/LanguageContext.jsx";
import { AnimationProvider } from "./context/AnimationContext.jsx";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Intro from "./components/Intro/Intro";
import NotFound from "./components/NotFound/NotFound.jsx";

import "./App.css";

function App() {
  const { handleTheme } = useTheme();

  useEffect(() => {
    handleTheme("dark");
  }, []);

  /* VOLVER A VER agregar
  - si alguien tipea red, cambiar primary a red
  - si alguien tipea off ejecutar animacion de apagar tv
  - agregar glitch a Fernando en mobile
  - tomar lo que prefiere el usuario para el dark mode
  - agregar cosas copadas al log
  - agregar aria-labels
  - agregar alguna imagen al fondo
  */

  return (
    <div className="crt-filter">
      <AnimationProvider>
        <LanguageProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Intro />}>
              <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
              </Route>
            </Route>
          </Routes>
        </LanguageProvider>
      </AnimationProvider>
    </div>
  );
}

export default App;
