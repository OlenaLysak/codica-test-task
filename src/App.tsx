//Components
import CitiesList from './components/CitiesList/CitiesList';
import CityInput from './components/CityInput/CityInput.jsx';

//Context
import useMyContext from './context/useMyContext';

//Style
import styles from './App.module.css';

//Types
import { CityItem } from './types/types';

const App = (): JSX.Element => {
  const { cities, setCities } = useMyContext();

  const checkDuplicates = (item: { lat: number; lon: number }): boolean => {
    const duplicate: boolean = cities.find(
      (city: { lat: number; lon: number }) =>
        city.lat === item.lat && city.lon === item.lon
    );
    return !!duplicate;
  };

  const handleOptionSelected = (item?: CityItem) => {
    if (!item) return;
    const newCity = {
      id: item.id,
      name: item.name,
      lat: item.lat,
      lon: item.lon,
    };

    const isDuplicate = checkDuplicates(newCity);
    if (isDuplicate) return alert('City already in the list');

    const updatedList = [...cities];
    updatedList.push(newCity);
    setCities(updatedList);
    localStorage.setItem('cities', JSON.stringify(updatedList));
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Codica test task</header>
      <CityInput handleOptionSelected={handleOptionSelected} />
      <CitiesList />
    </div>
  );
};

export default App;
