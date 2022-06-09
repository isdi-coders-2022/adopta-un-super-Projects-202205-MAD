import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { MarvelContext } from '../../context/marvel-context';
import { Card } from './index';

describe('Given the Card element', () => {
    const mockCard = {
        userName: 'Fer',
        nickname: 'nickName',
        id: 1234,
        name: 'Batman',
        thumbnail: {
            path: 'https://dfdfd',
            extension: 'png',
        },
    };
    const mockAddFavorite = jest.fn();

    const mockContextValue = {
        homePageCharacters: [],
        pagination: 0,
        totalCharactersApi: 0,
        pages: () => {},
        favoriteCharacters: [],
        addFavorite: mockAddFavorite,
        getFavorites: () => {},
        user: {},
    };

    test('should be rendered', () => {
        render(
            <MarvelContext.Provider value={mockContextValue}>
                <BrowserRouter>
                    <Card superHero={mockCard} />
                </BrowserRouter>
            </MarvelContext.Provider>
        );

        expect(screen.getByText(mockCard.name)).toBeInTheDocument();
    });

    describe('When adding new Card to favorites', () => {
        test('Then it should call the function', () => {
            render(
                <MarvelContext.Provider value={mockContextValue}>
                    <BrowserRouter>
                        <Card superHero={mockCard} />
                    </BrowserRouter>
                </MarvelContext.Provider>
            );

            userEvent.click(screen.getByAltText('icon'));

            // Assert
            expect(mockAddFavorite).toHaveBeenCalled();
            screen.debug();
        });
    });
});
