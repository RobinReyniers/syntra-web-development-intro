import React from "react";
import { useState } from "react";

const NavContext = React.createContext();
export default NavContext;

export function NavProvider({ children }) {
  const [contextClass, setClass] = useState(".hidden");
  const toggleClass = () => {
    if (contextClass === "visible") {
      setClass("hidden");
    } else {
      setClass("visible");
    }
  };
  return (
    <NavContext.Provider value={{ contextClass, toggleClass }}>
      {children}
    </NavContext.Provider>
  );
}
