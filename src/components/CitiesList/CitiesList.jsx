import React from 'react';
import styles from './CitiesList.module.css';

//Components
import CityCard from './CityCard';

//Context
import useMyContext from '../../context/useMyContext';

const CitiesList = () => {
  const { cities } = useMyContext();

  return (
    <div className={styles.list}>
      {cities.map((item) => {
        return (
          <CityCard key={item.id} id={item.id} lat={item.lat} lon={item.lon} />
        );
      })}
    </div>
  );
};

export default CitiesList;
