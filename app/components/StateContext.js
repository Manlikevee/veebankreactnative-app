import React, { useState, createContext } from "react";

// Create the context
export const StateContext = createContext();

// Create the StateProvider component
const StateProvider = ({ children }) => {
  const [token, setToken] = useState('');

  return (
    <StateContext.Provider value={{token, setToken}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
