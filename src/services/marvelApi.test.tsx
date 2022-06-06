/* eslint-disable no-undef */
import { MarvelApi } from './marvelApi';

describe('Given MarvelApi', () => {
    describe('When we instantiate', () => {
        describe('And we use method getCharacters', () => {
            test('Then the fetch should return an array of 1 character', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue([new MarvelApi(), new MarvelApi()]),
                });
                // const result = await MarvelApi.getCharacters();
                expect(fetch).toBeCalled();
                // expect(result.length).toBe(2);
            });
        });
    });
});
