import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [ocultarMenu, setOcultarMenu] = useState(false);

  const showMenu = (state) => {
    setOcultarMenu(state);
  };

  return (
    <UIContext.Provider
      value={{
        ocultarMenu,
        showMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
