import React, { useState } from 'react';
import styles from './CitiesList.module.css';

//Components
import CityCard from './CityCard';

//Icons
import AddIcon from '@mui/icons-material/Add';

const CitiesList = () => {
  const [cities, setCities] = useState(['Lviv', 'Kyiv', 'Odesa', 'Kharkiv']);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.list}>
      <div className={styles.btn} onClick={handleClick}>
        <div>Add City</div>
        <AddIcon />
      </div>
      {cities.map((item) => {
        return <CityCard key={item} city={item} />;
      })}
    </div>
  );
};

export default CitiesList;
