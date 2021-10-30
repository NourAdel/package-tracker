import axios from "axios";
import React, { createContext, useState } from "react";
export const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading]= useState(false)
  const setInput = (input) => {
    if (input.length > 7) return;
    setSearchInput(input);
  };
  const getPackageData = () => {
    if (searchInput.length < 7) return;
    setLoading(true)
    axios
      .get(`https://tracking.bosta.co/shipments/track/${searchInput}`)
      .then((res) => {
        setPackageData(res.data);
        setSearchInput("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoading(false)
      })
      
  };
  const reset = () => {
    setInput("");
    setPackageData(null);
  };

  return (
    <PackageContext.Provider
      value={{ searchInput, setInput, getPackageData, packageData, reset, loading, setLoading }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export const { Consumer } = PackageContext;
