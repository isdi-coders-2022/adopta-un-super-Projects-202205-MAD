export interface iFavorites {
    id?: number;
    name: string;
    nickname: string;
    idCharacter?: number;
    thumbnail?: {
        path: string;
        extension: string;
    };
    img?: string;
    ext?: string;
    favorite?: boolean;
}
