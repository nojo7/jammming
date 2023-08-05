import React from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
};

export default App;