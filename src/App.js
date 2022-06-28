import React from 'react';

//Style
import styles from './App.module.css';

//Components
import CitiesList from './components/CitiesList/CitiesList';
import CityInput from './components/CityInput/CityInput';

//Context
import useMyContext from './context/useMyContext';

function App() {
  const { cities, setCities } = useMyContext();

  const checkDuplicates = (item) => {
    const duplicate = cities.find(
      (city) => city.lat === item.lat && city.lon === item.lon
    );

    return !!duplicate;
  };

  const handleOptionSelected = (e, item) => {
    if (!item) return;
    const newCity = {
      id: item.it,
      name: item.name,
      lat: item.lat,
      lon: item.lon,
    };

    const isDuplicate = checkDuplicates(newCity);
    if (isDuplicate) return alert('City already in the list');

    const updatedList = [...cities];
    updatedList.push(newCity);
    setCities(updatedList);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Codica test task</header>
      <CityInput handleOptionSelected={handleOptionSelected} />
      <CitiesList />
    </div>
  );
}

export default App;
