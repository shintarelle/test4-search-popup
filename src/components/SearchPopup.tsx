'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './SearchPopup.module.css';
import data from '../../coins.json'


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
      <div className={styles.search}>
        <Image src='/search.png' alt='pic' width={24} height={24} style={{ opacity: 0.6 }} />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.input}
        />
        {searchTerm && <Image src='/close.png' alt='pic' width={16} height={16} className={styles.clearIcon} onClick={handleClearSearch}/>}
      </div>
        <div className={styles.filters}>
          <button onClick={() => setFilter('favorites')} className={filter === 'favorites' ? styles.active : ''}>
            <Image src='/star-solid.png' alt='pic' width={16} height={16} />
            <span>Favorites</span>
          </button>
          <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ''}>
          All Coins
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <ul className={styles.list}>
        {filteredData.map((item) => (
          <li key={item} className={styles.listItem} onClick={() => toggleFavorite(item)}>
            <Image src={favorites.includes(item) ? '/star-solid.png' : '/star.png'} alt='pic' width={16} height={16}
            />
            {item}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPopup;
