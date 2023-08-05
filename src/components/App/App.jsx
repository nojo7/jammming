import React, { useState } from 'react';
import './App.module.css';
import Button from '../Button/Button';

function App() {
  const [data, setData] = useState('primary');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
        <Button text='Submit' variant='primary' onClick={(e) => console.log(e)} />
        {/* <SearchBar /> */}
        {/* <SearchResults /> */}
        {/* <Playlist /> */}
      </main>
    </div>
  );
}

export default App;