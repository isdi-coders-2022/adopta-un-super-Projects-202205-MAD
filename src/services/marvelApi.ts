import { iFavorites } from '../models/favorites';

const url = 'http://gateway.marvel.com/v1/public/characters?limit=20';
const hash =
    '&ts=1000&apikey=51f17293928d718a3be05579990c29ed&hash=e5fe67d957b5f611358a74ecb6ab461c';

export class MarvelApi {
    static async getCharacters(
        offset: string = '0'
    ): Promise<{ data: { total: number; results: iFavorites[] } }> {
        const result = await fetch(`${url}&offset=${offset}${hash}`);
        return await result.json();
    }
}
