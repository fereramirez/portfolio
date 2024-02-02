import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNavbarLinks = (sections) => {
  const location = useLocation();
  const [buttonHover, setButtonHover] = useState(
    location.pathname.substring(1).toLowerCase(),
  );

  const handleHover = (i) => {
    setButtonHover(i);
  };

  const handleHoverLeave = () => {
    const i = sections.findIndex(
      (section) =>
        section.toLowerCase() === location.pathname.substring(1).toLowerCase(),
    );

    setButtonHover(i === -1 ? -2 : i);
  };

  useEffect(() => {
    const i = sections.findIndex(
      (section) =>
        section.toLowerCase() === location.pathname.substring(1).toLowerCase(),
    );

    setButtonHover(i === -1 ? -1.5 : i);
  }, [location.pathname]);

  return { buttonHover, handleHover, handleHoverLeave };
};

export default useNavbarLinks;
