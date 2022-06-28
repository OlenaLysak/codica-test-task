import React, { useState, useEffect } from 'react';
import styles from './CityCard.module.css';
import { Link } from 'react-router-dom';

//Constants
import { API_KEY, UNITS } from '../../constants/constants';

const CityCard = ({ name, id, lat, lon }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const degreesSymb = '\u00B0';

  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}${UNITS}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}${UNITS}`;
  console.log('url', url);

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
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className={styles.clickArea}>
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
      </Link>
    </div>
  );
};

export default CityCard;
