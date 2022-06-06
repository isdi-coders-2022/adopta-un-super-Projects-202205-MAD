import { CharacterModel } from "../models/characters";

export class MarvelApi {
    static async getCharacters(): Promise<{data: {results: CharacterModel[]}}> {
        const result = await fetch(
            `http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=51f17293928d718a3be05579990c29ed&hash=e5fe67d957b5f611358a74ecb6ab461c`
        );
        return await result.json();
    }
}
