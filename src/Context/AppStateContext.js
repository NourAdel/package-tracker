import React, { createContext, useState } from "react";
import i18n from "../Localization";
import useMediaQuery from'@mui/material/useMediaQuery'
export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState("en");
  const [IS_RTL, setRTL] = useState(false);
  const isMobileView = useMediaQuery('(max-width:500px)');

  const setLanguage = (language) => {
    setAppLanguage(language);
    setRTL(language === "ar");
    i18n.changeLanguage(language);
  };

  return (
    <AppStateContext.Provider
      value={{
        appLanguage,
        IS_RTL,
        setLanguage,
        isMobileView
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const { Consumer } = AppStateContext;
