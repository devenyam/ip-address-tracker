/* eslint-disable react/prop-types */

import { useContext } from 'react';
import styles from './Input.module.css';
import { SearchContext } from '../App';

export default function Input() {
  const {searchQuery, handleSearchQuery,
    handleSetSearchQuery} = useContext(SearchContext)

    // console.log(useContext(SearchContext))
  return (
    <div className={styles.input}>
      <label htmlFor="address-domain"></label>
      <input
        type="text"
        id="address-domain"
        placeholder="Search for any IP address or domain"
        value={searchQuery}
        onChange={handleSetSearchQuery}
      />
      <button onClick={handleSearchQuery}>
        <img src="/images/icon-arrow.svg" alt="button icon" />
      </button>
    </div>
  );
}
