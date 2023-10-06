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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [word, useword] = useState('veess');
  const [mydata, setData] = useState([]);
  const [mybillsdata, setBillsData] = useState([]);
  const [creditdebit, setcreditdebit] = useState([]);
  const fetchData = () => {
    AxiosGet('/userprofile/')
      .then((response) => {
        if (response) {
          setData(response);
          console.log(response)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

const Transactiondata = () => {
    AxiosGet('/creditanddebit')
      .then((response) => {
        if (response) {
          setcreditdebit(response);
          console.log(response)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchBills = () => {
    AxiosGet('/allbills')
      .then((response) => {
        if (response) {
          setBillsData(response);
          console.log(response)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const loginfunc = () => {
    console.log('clickedddddddddddd')
    setIsAuthenticated(true);
  };

  const logoutauth = () => {
    console.log('loggedout')
    setIsAuthenticated(false);
  };




  const usewording = () => {
    useword('test');
  };
  return (
    <StateContext.Provider value={{token, setToken, isAuthenticated, loginfunc, logoutauth, word, usewording, mydata, fetchData , fetchBills, mybillsdata, setIsAuthenticated, Transactiondata, creditdebit}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
