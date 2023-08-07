import React from "react";
import styles from './SearchBar.module.css';
import Button from "../Button/Button";

const SearchBar = () => {

    return (
        <div className={styles.searchBar}>
            <input className={styles.searchBarInput} type="text" placeholder="Search your favorite song..." />
            <Button text='Search Spotify' variant='searchBar' className={styles.searchButton}/>
        </div>
    );
};

export default SearchBar;