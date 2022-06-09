import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { MarvelContext } from './marvel-context';
import { MarvelContextProvider } from './marvel-provider';
import { MarvelApi } from '../services/marvelApi';
import { HttpStoreCharacters } from '../services/http.store.characters';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('../services/marvelApi');
jest.mock('../services/http.store.characters');
jest.mock('@auth0/auth0-react');

const mockResponseData = [
    {
        name: 'test',
        thumbnail: {
            path: 'https://imagen',
            extension: 'string',
        },
    },
];



describe('Given the context <MarvelContextProvider />', () => {
    describe("When it's used in a component test", () => {
        // const store = new HttpStoreCharacters();
        beforeEach(() => {
            
            (useAuth0 as jest.Mock).mockReturnValue({isAuthenticated : true, user: {nickname: 'fer'}} );

            (MarvelApi.getCharacters as unknown as jest.Mock).mockResolvedValue({
                data: { results: mockResponseData },
            });
            // (store.getCharacters('fer') as unknown as jest.Mock).mockResolvedValue(mockResponseData);

            HttpStoreCharacters.prototype.getCharacters = 
                jest.fn()
                .mockResolvedValue(mockResponseData) ;
        });
    
        const TestingComponent =  () => {
            const { homePageCharacters, favoriteCharacters } = useContext(MarvelContext);
            return (
                <>
                    <p>{homePageCharacters.length}</p> 
                    <p>{JSON.stringify(homePageCharacters)}</p>
                    <p>{favoriteCharacters[0]?.name}</p>
                </>
            );
        };
    
        test('Then homePageCharacters should be gotten from context', async () => {
            render(
                <MarvelContextProvider>
                    <TestingComponent />
                </MarvelContextProvider>
            );
    
            // screen.debug();
    
            expect( screen.getByText('0')).toBeInTheDocument();
        });

        test('Then favoriteCharacters should be gotten from context', async () => {
            render(
                <MarvelContextProvider>
                    <TestingComponent />
                </MarvelContextProvider>
            );
    
            
    
            expect(HttpStoreCharacters.prototype.getCharacters).toBeCalled();
            expect(await screen.findByText('test')).toBeInTheDocument();
            // screen.debug();
        });
    });
});