import React, { createContext, useState } from "react";
export const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const setInput = (input) => {
    if (input.length > 7) return;
    setSearchInput(input);
  };

  return (
    <PackageContext.Provider value={{ searchInput, setInput }}>
      {children}
    </PackageContext.Provider>
  );
};

export const { Consumer } = PackageContext;
