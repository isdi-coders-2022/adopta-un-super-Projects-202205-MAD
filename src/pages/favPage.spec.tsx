import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CardList } from '../components/cardList';
import { MarvelContext } from '../context/marvel-context';

describe('Given the favPage', () => {
    const mockFavList = [
        {
            userName: 'Fer',
            nickname: 'nickName',
            id: 1234,
            name: 'Batman',
            thumbnail: {
                path: 'https://dfdfd',
                extension: 'png',
            },
        },
        {
            userName: 'Lola',
            nickname: 'nickName2',
            id: 1235,
            name: 'Batwoman',
            thumbnail: {
                path: 'https://dfdfff',
                extension: 'png',
            },
        },
    ];

    const mockContextValue = {
        homePageCharacters: [],
        pagination: 0,
        totalCharactersApi: 0,
        pages: () => {},
        favoriteCharacters: mockFavList,
        addFavorite: () => {},
        getFavorites: () => {},
        deleteFavorite: () => {},
        user: {},
        openModal: false,
        openModalF: ()=>{}
    };

    test('should be rendered', () => {
        render(
            <MarvelContext.Provider value={mockContextValue}>
                <BrowserRouter>
                    <CardList characters={mockFavList}></CardList>
                </BrowserRouter>
            </MarvelContext.Provider>
        );

        expect(screen.getByText(mockFavList[0].name)).toBeInTheDocument();
    });
});
