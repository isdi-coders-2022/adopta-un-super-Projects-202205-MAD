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
            (LoginPage as jest.Mock).mockReturnValue(<div>Login</div>);
            (HomePage as jest.Mock).mockReturnValue(<div>Home - AUS</div>);
            (FavPage as jest.Mock).mockReturnValue(<div>Favorites</div>);
            (DetailsPage as jest.Mock).mockReturnValue(<div>Details</div>);
            render(<App />);

            screen.debug();

            expect(screen.getAllByText('Login')).toBeTruthy();
            expect(screen.getAllByText('Favorites')).toBeTruthy();
            expect(screen.getAllByText('Details')).toBeTruthy();
        });
    });
});
