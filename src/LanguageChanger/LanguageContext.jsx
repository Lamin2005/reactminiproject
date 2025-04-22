import { createContext, useState } from "react";
import { transition } from "./transition";

export let LanguageContext = createContext();

export let LanguageProvider = ({ children }) => {
  let [language, setLanguage] = useState("en");

  let changeLanguage = (lang) => {
    setLanguage(lang);
  };

  let t = (key) => {
    return transition[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage,t}}>
      {children}
    </LanguageContext.Provider>
  );
};
