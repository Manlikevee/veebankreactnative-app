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
  const [atmdetails, setatmdetails] =  useState([]);
  const [AvailableImages, setAvailableImages] =  useState([]);
  const [Beneficiarydata, setbeneficaryData] = useState([]);
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


  const mybeneficary = () => {
    AxiosGet('/getbeneficary/')
      .then((response) => {
        if (response) {
          setbeneficaryData(response);
          console.log(response)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchAvailableImages = () => {
    AxiosGet('/AvailableImages/')
      .then((response) => {
        if (response) {
          setAvailableImages(response);
          console.log(response)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchatmData = () => {
    AxiosGet('/generate_single_atm_card/')
      .then((response) => {
        if (response) {
          setatmdetails(response);
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
    <StateContext.Provider value={{fetchatmData, fetchAvailableImages, AvailableImages, atmdetails, token, setToken, isAuthenticated, loginfunc, logoutauth, word, usewording, mydata, fetchData , fetchBills, mybillsdata, setIsAuthenticated, Transactiondata, creditdebit, Beneficiarydata, mybeneficary }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
