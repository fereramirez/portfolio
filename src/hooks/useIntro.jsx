import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIntro = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [bottomCursor, setBottomCursor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const name = "Fernando Ramirez,";
    const title = "Frontend Developer.";

    let i = 0;
    let j = 0;

    setInterval(() => {
      setTopText(name.slice(0, i + 1));
      i += 1;
    }, 60);

    setTimeout(() => {
      setInterval(() => {
        setBottomText(title.slice(0, j + 1));
        j += 1;
      }, 60);
    }, 2000);

    setTimeout(() => {
      setBottomCursor(true);
    }, 2000);

    setTimeout(() => {
      document.documentElement.style.overflowY = "auto";
    }, 8000);
  }, []);

  return { topText, bottomText, bottomCursor, location };
};

export default useIntro;
