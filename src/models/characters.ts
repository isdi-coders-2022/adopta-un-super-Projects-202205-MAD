import { User } from "@auth0/auth0-react";

export class iFavorites {
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };

    constructor(
        name: string,
        path: string = '',
        extension: string = '',
        public id: number,
        public userName: string = ''
    ) {
        this.name = name;
        this.thumbnail = {
            path,
            extension,
        };
    }
}
