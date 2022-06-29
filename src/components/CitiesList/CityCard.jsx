import React, { useState, useEffect } from 'react';
import styles from './CityCard.module.css';
import { Link } from 'react-router-dom';

//Constants
import { DEGREE_SYMBOL } from '../../constants/constants';

//Components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//Icons
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//Context
import useMyContext from '../../context/useMyContext';

//Utils
import { setUrlByCoord } from '../../utils/dataUtils';

const CityCard = ({ id, lat, lon }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const { cities, setCities } = useMyContext();

  const url = setUrlByCoord(lat, lon);

  const handleRefresh = (e) => {
    e.preventDefault();
    getData();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const updatedList = cities.filter((item) => item.id !== id);
    setCities(updatedList);
    localStorage.setItem('cities', JSON.stringify(updatedList));
  };

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.card}>
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className={styles.clickArea}>
          <div className={styles.name}>{data?.name}</div>
          <div className={styles.details}>
            <div>
              Temperature: {data?.main?.temp}
              {DEGREE_SYMBOL}
            </div>
            <div>
              Feels like: {data?.main?.feels_like}
              {DEGREE_SYMBOL}
            </div>
            <div>Humidity: {data?.main?.humidity}%</div>
          </div>
          <div className={styles.refreshBtn}>
            <Button onClick={handleRefresh} variant="contained" size="small">
              <span>Refresh</span>
              <RefreshIcon />
            </Button>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={handleDelete}
            >
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CityCard;
