import React, { useContext } from 'react';
import { MarvelContext } from '../context/marvel-context';
import '../styles/App.css';

function AppUI() {
    
    const {homePageCharacters} = useContext(MarvelContext)


  return (
    <div className="App">
      <h1>Marvel</h1>

      <ul>
        {
            homePageCharacters.map(item => (
                <li key={item.name}>
                    {item.name}
                </li>
            ))

        }
          
      </ul>
    </div>
  );
}

export default AppUI;
