import { render, screen } from '@testing-library/react';
import React, { useContext } from 'react';
import { MarvelContext } from './marvel-context';
import { MarvelContextProvider } from './marvel-provider';




 const TestingComponent = () => {
     const { homePageCharacters } = useContext(MarvelContext);
      console.log(homePageCharacters);
      return (
        <>
          <p>{homePageCharacters.length}</p>
          <p>{JSON.stringify(homePageCharacters)}</p>
        </>
      );
    };
    
    describe('<MarvelContextProvider />', () => {
      test('provides expected MarvelContext to child elements', () => {



        render(
          <MarvelContextProvider >
            <TestingComponent />
          </MarvelContextProvider>
        )
    
        screen.debug()

    expect(screen.getByText('0')).toBeInTheDocument();
    });
        
        // expected name
        // expected isAdmin
        }
    )