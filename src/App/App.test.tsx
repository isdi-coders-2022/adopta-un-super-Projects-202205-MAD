/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../App';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { FavPage } from '../pages/favPage';
import { DetailsPage } from '../pages/detailsPage';

jest.mock('../pages/loginPage');
jest.mock('../pages/homePage');
jest.mock('../pages/favPage');
jest.mock('../pages/detailsPage');

describe('Given my App', () => {
    describe('When rendering', () => {
        test('It should display the routes', () => {
            (LoginPage as jest.Mock).mockReturnValue(<img alt="login" />);
            (HomePage as jest.Mock).mockReturnValue(<img alt="home" />);
            (FavPage as jest.Mock).mockReturnValue(<img alt="favorites" />);
            (DetailsPage as jest.Mock).mockReturnValue(<img alt="details" />);
            render(<App />);

            screen.debug();

            expect(screen.getByAltText('logo')).toBeTruthy();
            expect(screen.getByAltText('favorites')).toBeTruthy();
            expect(screen.getByAltText('hogar')).toBeTruthy();
        });
    });
});
