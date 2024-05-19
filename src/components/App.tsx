import React from 'react';
import scss from './App.module.scss';
import CardList from './CardList/CardList';
import TotalBooks from './TotalBooks/TotalBooks';
import AddBookProvider from '../context/addBookContext';

function App() {
  return (
    <AddBookProvider>
      <header>
        <h1>Use Context</h1>
      </header>
      <main className={scss.main}>
        <TotalBooks />
        <CardList />
      </main>
    </AddBookProvider>
  );
}

export default App;
