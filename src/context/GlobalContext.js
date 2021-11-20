import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
export const GlobalContext = createContext(() => null);

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const mobile = useMediaQuery({
    maxWidth: "600px",
  });
  const state = {
    isLoggedIn,
    setIsLoggedIn,
    mobile,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
