import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import { LanguageProvider } from "./context/LanguageContext";

import css from "./App.module.css";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { handleTheme } = useTheme();

  useEffect(() => {
    handleTheme("dark");
  }, []);

  return (
    <div className={css.App}>
      <LanguageProvider>
        <Intro />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
