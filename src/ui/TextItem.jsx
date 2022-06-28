import React from 'react';

//Style
import styles from './TextItem.module.css';

const TextItem = ({ title, value }) => {
  return (
    <>
      {value ? (
        <div className={styles.item}>
          <div className={styles.prop}>{title}</div>
          <div className={styles.value}>{value}</div>
        </div>
      ) : null}
    </>
  );
};

export default TextItem;
