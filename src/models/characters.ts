export class CharacterModel {
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };

    constructor(name: string, path: string = '', extension: string = '') {
        this.name = name;
        this.thumbnail = {
            path,
            extension,
        };
    }
}
