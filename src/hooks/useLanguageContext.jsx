import { useContext } from "react";

import LanguageContext from "../contexts/LanguageContext.jsx";

const useLanguageContext = () => {
  const { language, texts, handleLanguage } = useContext(LanguageContext);

  return {
    language,
    texts,
    handleLanguage,
  };
};

export default useLanguageContext;
