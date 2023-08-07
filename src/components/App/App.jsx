import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <section className={styles.searchBar}>
          <SearchBar />
        </section>
        <section className={styles.lists}>
          <SearchResults />
          <Playlist />
        </section>
      </main>
    </div>
  );
};

export default App;