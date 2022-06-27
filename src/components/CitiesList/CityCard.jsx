import React, { useState, useEffect } from 'react';
import styles from './CityCard.module.css';

//Constants
import { API_KEY, UNITS } from '../../constants/constants';

const CityCard = ({ city }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const degreesSymb = '\u00B0';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${UNITS}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
  }, [url]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.card}>
      <div className={styles.name}>{data?.name}</div>
      <div className={styles.details}>
        <div>
          Temperature: {data?.main?.temp}
          {degreesSymb}
        </div>
        <div>
          Feels like: {data?.main?.feels_like}
          {degreesSymb}
        </div>
        <div>Humidity: {data?.main?.humidity}%</div>
      </div>
    </div>
  );
};

export default CityCard;
