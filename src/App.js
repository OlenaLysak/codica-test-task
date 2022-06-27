import React from 'react';

//Style
import styles from './App.module.css';

//Components
import CitiesList from './components/CitiesList/CitiesList';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Codica test task</header>
      <CitiesList />
    </div>
  );
}

export default App;
