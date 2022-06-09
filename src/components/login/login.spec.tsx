import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';

jest.mock('@auth0/auth0-react');
describe('Given the function LogOutButton', () => {
    describe('When calling it', () => {
        test('should first', () => {
            const user1 = {
                email: 'j@gmail.com',
                email_verified: true,
                family_name: 'R',
                given_name: 'Jose',
                locale: 'es',
                name: 'Jose E',
                nickname: 'josez',
                picture:
                    'https://lh3.googleusercontent.com/a/AATXAJzw0OHKBHbuuUTxwYItFSo94CykoMZ3XQg-4YGX=s96-c',
                sub: 'google-oauth2|118111786459417766034',
                updated_at: '2022-02-19T14:40:50.296Z',
            };

            (useAuth0 as jest.Mock).mockReturnValue({
                user1,
                logout: jest.fn(),
                isAuthenticated: Boolean,
                loginWithRedirect: jest.fn(),
            });

            render(<LoginButton />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
    });
});
