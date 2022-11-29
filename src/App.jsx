import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import NotFound from "./components/NotFound/NotFound";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimationProvider } from "./context/AnimationContext";

import css from "./App.module.css";
import useTheme from "./hooks/useTheme";
import FormTest from "./FormTest";

function App() {
  const { handleTheme } = useTheme();

  useEffect(() => {
    handleTheme("dark");
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.App}>
      <AnimationProvider>
        <LanguageProvider>
          <Navbar />
          <Routes>
            {/*  <Route path="/" element={<Intro />}> */}
            <Route path="/" element={<FormTest />}>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
            {/*   </Route> */}
          </Routes>
        </LanguageProvider>
      </AnimationProvider>
    </div>
  );
}

export default App;
