import { HttpStoreCharacters } from './http.store.characters';

describe('Given StoreApi', () => {
    describe('When we instantiate', () => {
        describe('And we use method getCharacters', () => {
            const resp = {
                data: {
                    total: 20,
                    results: [
                        {
                            name: 'Batman',
                            thumbnail: { path: 'htps:/dfdf', extension: 'jpg' },
                            id: 1200,
                        },
                    ],
                },
            };
            test('Then the fetch should return an array of 1 character', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue(resp),
                });
                const result =
                    await HttpStoreCharacters.prototype.getCharacters('fer');
                expect(fetch).toBeCalled();
                expect(result).toEqual({
                    data: {
                        total: 20,
                        results: [
                            {
                                name: 'Batman',
                                thumbnail: {
                                    path: 'htps:/dfdf',
                                    extension: 'jpg',
                                },
                                id: 1200,
                            },
                        ],
                    },
                });
                expect(result).toBe(resp);
            });
        });
    });
});
