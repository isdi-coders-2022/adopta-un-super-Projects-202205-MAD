import React from 'react';
import { MarvelContextProvider } from '../context/marvel-provider';
import AppUI from "./AppUI"

function App() {
  return (
      <MarvelContextProvider>
      <AppUI/>
      </MarvelContextProvider>
  );
}

export default App;
