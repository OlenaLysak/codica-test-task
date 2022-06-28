import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import TextItem from '../../ui/TextItem';
import { Link } from 'react-router-dom';

//Styles
import styles from './CityPage.module.css';

//Context
import useMyContext from '../../context/useMyContext';

//Utils
import { setUrlByCoord } from '../../utils/dataUtils';

const CityPage = () => {
  const [error, setError] = useState('');
  const { id } = useParams();
  const { cities } = useMyContext();
  const [data, setData] = useState({});
  const currentCity = cities.find((el) => el.id === id);

  useEffect(() => {
    const url = setUrlByCoord(currentCity.lat, currentCity.lon);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
  }, [currentCity]);

  if (error) return console.log(error);

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <h2>Back Home</h2>
      </Link>
      <div className={styles.details}>
        <div className={styles.name}>
          {data?.name}, {data?.sys?.country}
        </div>
        <TextItem title="Temperature" value={data?.main?.temp} />
        <TextItem title="Feels like" value={data?.main?.feels_like} />
        <TextItem title="Humidity" value={data?.main?.humidity} />
        <TextItem title="Max temoerature" value={data?.main?.temp_max} />
        <TextItem title="Min temperature" value={data?.main?.temp_min} />
        <TextItem title="Wind speed" value={data?.wind?.speed} />
      </div>
    </div>
  );
};

export default CityPage;
