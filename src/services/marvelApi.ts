import { CharacterModel } from "../models/characters";

const url = 'http://gateway.marvel.com/v1/public/characters';
const hash = '&ts=1000&apikey=51f17293928d718a3be05579990c29ed&hash=e5fe67d957b5f611358a74ecb6ab461c';


export class MarvelApi {
    // static async getCharacters(): Promise<{data: {results: CharacterModel[]}}> {
    //     const result = await fetch(
    //         `${url}?${hash}`
    //     );
    //     return await result.json();
    // }

    static async getCharacters(offset: string = '20'): Promise<{data: {results: CharacterModel[]}}> {
        const result = await fetch(
            `${url}?limit=20&offset=${offset}${hash}`
        );
        return await result.json();
    }
}
