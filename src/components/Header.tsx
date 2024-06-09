'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SearchPopup from './SearchPopup';
import styles from './Header.module.css';


const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

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
      >
        <Image src='/search.png' alt='pic' width={20} height={20} style={{ opacity: 0.6 }} />
        Search
        </button>
      {isPopupOpen && (
        <div ref={popupRef}>
          <SearchPopup />
        </div>
        )}
        </div>
    </header>
  );
};

export default Header;
