import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CardList } from '.';
import { MarvelContext } from '../../context/marvel-context';

describe('Given the CardList element', () => {
    const mockList = [
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
        homePageCharacters: mockList,
        pagination: 0,
        totalCharactersApi: 0,
        pages: () => {},
        favoriteCharacters: [],
        addFavorite: () => {},
        getFavorites: () => {},
        deleteFavorite: () => {},
        user: {},
    };

    test('should be rendered', () => {
        render(
            <MarvelContext.Provider value={mockContextValue}>
                <BrowserRouter>
                    <CardList characters={mockList}></CardList>
                </BrowserRouter>
            </MarvelContext.Provider>
        );

        expect(screen.getByText(mockList[0].name)).toBeInTheDocument();
    });
});
