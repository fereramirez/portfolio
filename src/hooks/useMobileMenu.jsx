import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return { showMenu, handleShowMenu };
};

export default useMobileMenu;
