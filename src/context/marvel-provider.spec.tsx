import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { MarvelContext } from './marvel-context';
import { MarvelContextProvider } from './marvel-provider';
import { MarvelApi } from '../services/marvelApi';
import { HttpStoreCharacters } from '../services/http.store.characters';
import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';

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

const mockCharacter = {
    id: 22,
    name: 'Test1',
    nickname: 'TestNickName',
    idCharacter: 23,
    thumbnail: {
        path: 'testPath',
        extension: 'testExtension',
    },
    img: 'testImg',
    ext: 'testExt',
};

describe('Given the context <MarvelContextProvider />', () => {
    describe("When it's used in a component test", () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
                user: { nickname: 'fer' },
            });

            (MarvelApi.getCharacters as unknown as jest.Mock).mockResolvedValue(
                {
                    data: { results: mockResponseData },
                }
            );

            HttpStoreCharacters.prototype.getCharacters = jest
                .fn()
                .mockResolvedValue(mockResponseData);

            HttpStoreCharacters.prototype.setCharacter = jest
                .fn()
                .mockResolvedValue(mockCharacter);
        });

        const TestingComponent = () => {
            const { homePageCharacters, favoriteCharacters, addFavorite } =
                useContext(MarvelContext);

            const handlerClick = () => {
                addFavorite(mockCharacter);
            };
            return (
                <>
                    <p>{homePageCharacters?.length}</p>
                    <p>{JSON.stringify(homePageCharacters)}</p>
                    <p>{favoriteCharacters[0]?.name}</p>
                    <p>{JSON.stringify(favoriteCharacters)}</p>
                    <p>Length: {favoriteCharacters.length}</p>
                    <button onClick={handlerClick}>add</button>
                </>
            );
        };

        test('Then homePageCharacters should be gotten from context', async () => {
            render(
                <MarvelContextProvider>
                    <TestingComponent />
                </MarvelContextProvider>
            );
        });

        test('Then favoriteCharacters should be gotten from context', async () => {
            render(
                <MarvelContextProvider>
                    <TestingComponent />
                </MarvelContextProvider>
            );

            expect(HttpStoreCharacters.prototype.getCharacters).toBeCalled();
            expect(await screen.findByText('test')).toBeInTheDocument();
        });

        test('Then favoriteCharacter should be added from context', async () => {
            render(
                <MarvelContextProvider>
                    <TestingComponent />
                </MarvelContextProvider>
            );

            const addButton = screen.getByText('add');

            expect(HttpStoreCharacters.prototype.setCharacter).not.toBeCalled();
            expect(await screen.findByText('Length: 1'));
            userEvent.click(addButton);

            await expect(await screen.findByText('Length: 2'));

            userEvent.click(addButton);

            await expect(await screen.findByText('Length: 3'));

            expect(
                HttpStoreCharacters.prototype.setCharacter
            ).toHaveBeenCalledTimes(2);
        });
    });
});
