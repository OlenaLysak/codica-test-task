import styles from './CitiesList.module.css';

//Types
import { CityItem } from '../../types/types';

//Components
import CityCard from './CityCard';

//Context
import useMyContext from '../../context/useMyContext';

const CitiesList = () => {
  const { cities } = useMyContext();

  return (
    <div className={styles.list}>
      {cities.map((item: CityItem) => {
        return (
          <CityCard key={item.id} id={item.id} lat={item.lat} lon={item.lon} />
        );
      })}
    </div>
  );
};

export default CitiesList;
