import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Intro from "./components/Intro/Intro";
import NotFound from "./components/NotFound/NotFound.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { AnimationProvider } from "./context/AnimationContext.jsx";

import css from "./App.module.css";
import useTheme from "./hooks/useTheme";

function App() {
  const { handleTheme } = useTheme();

  useEffect(() => {
    handleTheme("dark");
  }, []);

  return (
    <div className={css.App}>
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
