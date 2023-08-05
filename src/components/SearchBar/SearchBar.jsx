import React from "react";
import styles from './SearchBar.module.css';
import Button from "../Button/Button";

const SearchBar = () => {

    return (
        <div className="search-bar">
            <input type="text" />
            <Button text='Search Spotify' variant='primary' />
        </div>
    );
};

export default SearchBar;