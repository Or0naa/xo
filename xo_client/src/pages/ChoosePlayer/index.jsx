import React, { useState } from 'react';
import styles from './style.module.scss';
import GrayXO from '../../components/GrayXO';

export default function ChoosePlayer() {
  const [chosenSign, setChosenSign] = useState(null);

  const handleSignClick = (sign) => {
    setChosenSign(sign === chosenSign ? null : sign);
  };

  return (
    <div className={styles.container}>
      <div>Choose Player</div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.signButton} ${chosenSign === 'X' ? styles.selected : ''}`}
          onClick={() => handleSignClick('X')}
        >
          <GrayXO sign="X" chosen={chosenSign === 'X'} />
        </button>
        <button
          className={`${styles.signButton} ${chosenSign === 'O' ? styles.selected : ''}`}
          onClick={() => handleSignClick('O')}
        >
          <GrayXO sign="O" chosen={chosenSign === 'O'} />
        </button>
      </div>
    </div>
  );
}