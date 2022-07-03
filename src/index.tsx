import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Style
import './index.css';

//Components
import App from './App';
import CityPage from './components/CityPage/CityPage';

//Context
import MyContextProvider from './context/MyContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>
);
