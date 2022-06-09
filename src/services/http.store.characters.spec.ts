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
            test('Then the fetch should return an array of characters', async () => {
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
        describe('And we use method setCharacter', () => {
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
            test('Then the fetch should return character', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue(resp),
                });
                const result = await HttpStoreCharacters.prototype.setCharacter(
                    mockCard
                );
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
        describe('And we use method updateCharacter', () => {
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
            test('Then the fetch should return character', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue(resp),
                });
                const result =
                    await HttpStoreCharacters.prototype.updateCharacter(
                        mockCard
                    );
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
