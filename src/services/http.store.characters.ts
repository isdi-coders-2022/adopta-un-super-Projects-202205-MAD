// import { useAuth0 } from '@auth0/auth0-react';
import { CharacterModel } from '../models/characters';



export class HttpStoreCharacters {

    url: string;
    constructor() {
        this.url = 'http://localhost:4000/users';
    }

    async getCharacters(nickname: string): Promise<Array<CharacterModel>> {
        // GET
        return fetch('http://localhost:4000/users?nickname=' + nickname).then((resp) => {
            console.log('llega response');
            return resp.json();
        });
    }

    async getCharacter(character: CharacterModel): Promise<CharacterModel> {
        // GET
        const resp = await fetch(this.url + `/${character.id}`);
        return await resp.json();
    }

    setCharacter(character: CharacterModel): Promise<CharacterModel> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

    updateCharacter(
        character: CharacterModel
    ): Promise<Partial<CharacterModel>> {
        // PUT / PATCH
        return fetch(this.url + `/${character.id}`, {
            method: 'PATCH',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

    deleteCharacter(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
