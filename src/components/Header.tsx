'use client'

import { useState } from 'react';
import Image from 'next/image';
import SearchPopup from './SearchPopup';
import styles from './Header.module.css';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerMenuItem}>
        <span className={styles.headerBoldText}>DOGE</span>$0.163
      </div>
      <div className={styles.headerMenuItem}>
        <span className={styles.headerMenuItemText}>BTC</span>
        <span className={styles.headerMenuItemText}>ETH</span>
        <span className={styles.headerMenuItemText}>XTZ</span>
      </div>
      <div className={styles.searchButtonWrap}>
        <button
        className={`${styles.searchButton} ${isPopupOpen ? styles.searchButtonActive : ''}`}
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        // onFocus={() => setIsPopupOpen(true)}
        // onBlur={() => setIsPopupOpen(false)}
      >
          <Image src='/search.png' alt='pic' width={20} height={20} style={{ opacity: 0.6 }} />
        Search
        </button>
        {isPopupOpen && <SearchPopup />}
      </div>
    </header>
  );
};

export default Header;
