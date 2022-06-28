import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cities, setCities] = useState([
    { id: '702550', name: 'Lviv', lat: 49.841952, lon: 24.0315921 },
    { id: '703448', name: 'Kyiv', lat: 50.4500336, lon: 30.5241361 },
    { id: '698740', name: 'Odesa', lat: 46.4873195, lon: 30.7392776 },
    { id: '706483', name: 'Kharkiv', lat: 49.9923181, lon: 36.2310146 },
  ]);

  const contextValues = {
    cities,
    setCities,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
