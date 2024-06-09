'use client'
import { useState } from 'react';
import { FaSearch, FaTimes, FaStar } from 'react-icons/fa';
import styles from './SearchPopup.module.css';

const data = [
  "WINGS", "STARL", "CVP", "DOT", "ONG", "MSOL", "JENNER", "LXT", "ORBR",
  "CMP", "KP3R", "BNBBULL", "HPT", "AERGO", "MONA", "CANDY", "MAGE",
  "PLY", "MMF", "JAPAN225IX", "RSR", "HARD", "UOS", "DAD", "POA", "EVX",
  "NFT", "B2M", "ANTEX", "", "RPX", "MOTHER", "GYEN", "PAAL", "RVN",
  "ID", "EURCV", "CERE", "MUSD", "PYR", "ZEROLEND", "RDNT", "ANY",
  "MICE", "GO", "DICE", "TAVA", "VET"
];

const SearchPopup = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const toggleFavorite = (item: string) => {
    setFavorites((prev) =>
      prev.includes(item) ? prev.filter(fav => fav !== item) : [...prev, item]
    );
  };

  const filteredData = data.filter((item) => {
    if (filter === 'favorites' && !favorites.includes(item)) {
      return false;
    }
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.input}
        />
        {searchTerm && <FaTimes className={styles.clearIcon} onClick={handleClearSearch} />}
      </div>
      <div className={styles.filters}>
        <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ''}>
          All Coins
        </button>
        <button onClick={() => setFilter('favorites')} className={filter === 'favorites' ? styles.active : ''}>
          <FaStar /> Favorites
        </button>
      </div>
      <ul className={styles.list}>
        {filteredData.map((item) => (
          <li key={item} className={styles.listItem}>
            <FaStar
              className={favorites.includes(item) ? styles.filledStar : styles.outlineStar}
              onClick={() => toggleFavorite(item)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPopup;
