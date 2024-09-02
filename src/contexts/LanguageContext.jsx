import { createContext, useMemo, useState } from "react";

import { translations } from "../helpers/translations";

const LanguageContext = createContext();

const initialLanguage = "es";

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (language) => {
    if (language === "es" || language === "en") {
      setLanguage(language);
      setTexts(translations[language]);
    }
  };

  const data = useMemo(
    () => ({ language, texts, handleLanguage }),
    [language, texts],
  );

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
