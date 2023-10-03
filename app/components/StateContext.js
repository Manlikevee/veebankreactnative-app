import React, { useState, createContext, useContext } from "react";
import AxiosGet from "../Utils/AxiosGet";
// Create the context
export const StateContext = createContext();
export const useAuth = () => {
  return useContext(StateContext);
};
// Create the StateProvider component
const StateProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [word, useword] = useState('veess');
  const [mydata, setData] = useState([]);


  const fetchData = () => {
    AxiosGet('/userprofile/')
      .then((response) => {
        if (response) {
          setData(response);
  
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const usewording = () => {
    useword('test');
  };
  return (
    <StateContext.Provider value={{token, setToken, isAuthenticated, login, logout, word, usewording, mydata, fetchData }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
