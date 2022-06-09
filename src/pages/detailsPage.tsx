// import { CharacterModel } from "../models/characters";

import { useParams } from 'react-router-dom';

export function DetailsPage() {
    const { id } = useParams();

    return <h1>{id}</h1>;
}
