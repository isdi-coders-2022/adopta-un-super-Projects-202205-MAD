import { render, screen } from '@testing-library/react';
import React, { useContext } from 'react';
import { MarvelContext } from './marvel-context';
import { MarvelContextProvider } from './marvel-provider';
import { MarvelApi } from '../services/marvelApi';

jest.mock('../services/marvelApi');

const mockResponseData = [
    {
        name: 'test',
        thumbnail: {
            path: '',
            extension: 'string',
        },
    },
];

describe('<MarvelContextProvider />', () => {
    beforeEach(() => {
        (MarvelApi.getCharacters as unknown as jest.Mock).mockResolvedValue({
            data: { results: mockResponseData },
        });
    });

    const TestingComponent = () => {
        const { homePageCharacters } = useContext(MarvelContext);
        return (
            <>
                <p>{homePageCharacters.length}</p>
                <p>{JSON.stringify(homePageCharacters)}</p>
            </>
        );
    };

    test('provides expected MarvelContext to child elements', async () => {
        render(
            <MarvelContextProvider>
                <TestingComponent />
            </MarvelContextProvider>
        );

        screen.debug();

        expect(await screen.getByText('0')).toBeInTheDocument();
    });

    // expected name
    // expected isAdmin
});
