import React from 'react';
import styles from './CitiesList.module.css';

//Components
import CityCard from './CityCard';

//Icons
import AddIcon from '@mui/icons-material/Add';

//Context
import useMyContext from '../../context/useMyContext';

const CitiesList = () => {
  const { cities } = useMyContext();

  return (
    <div className={styles.list}>
      <div className={styles.addCard}>
        <div>Add City</div>
        <AddIcon />
      </div>
      {cities.map((item) => {
        return (
          <CityCard
            key={item.id}
            id={item.id}
            name={item.name}
            lat={item.lat}
            lon={item.lon}
          />
        );
      })}
    </div>
  );
};

export default CitiesList;
