import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AnimationContext = createContext();

const initialFadeOut = true;
const initialPop = true;
const initialCoverFadeOut = false;

function AnimationProvider({ children }) {
  const [runFadeOut, setRunFadeOut] = useState(initialFadeOut);
  const [runPop, setRunPop] = useState(initialPop);
  const [runCoverFadeOut, setRunCoverFadeOut] = useState(initialCoverFadeOut);
  const [linkSelected, setLinkSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" && setRunPop(false);
    // eslint-disable-next-line
  }, []);

  const handleLinkSelected = (text) => {
    setLinkSelected(text);
    setRunFadeOut(false);
    setRunCoverFadeOut(true);

    setTimeout(() => {
      navigate(`/${text}`);
    }, 3000);

    setTimeout(() => {
      setLinkSelected("");
    }, 3000);

    setTimeout(() => {
      setRunCoverFadeOut(false);
    }, 5000);
  };

  const data = {
    runFadeOut,
    runPop,
    runCoverFadeOut,
    linkSelected,
    handleLinkSelected,
  };

  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  );
}

export { AnimationProvider };
export default AnimationContext;
