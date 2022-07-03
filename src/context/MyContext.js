import React, { createContext, useState, useEffect } from 'react';

import { INITIAL_CITIES } from '../constants/constants';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cities, setCities] = useState(INITIAL_CITIES);

  useEffect(() => {
    const citiesCache = JSON.parse(localStorage.getItem('cities'));
    if (!!citiesCache) {
      setCities(citiesCache);
    }
  }, []);

  const contextValues = {
    cities,
    setCities,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
