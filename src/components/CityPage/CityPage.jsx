import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
// import TextItem from './ui/TextItem';
import { Link } from 'react-router-dom';

//Styles
import styles from './CityPage.module.css';

const CityPage = () => {
  // const [error, setError] = useState('');
  const { id } = useParams();

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <h2>Back Home</h2>
      </Link>
      <div className={styles.charCard}>{id}</div>
    </div>
  );
};

export default CityPage;
