// import { iFavorites } from "../models/favorites";

import { useParams } from 'react-router-dom';

export function DetailsPage() {
    const { id } = useParams();

    return <h1>{id}</h1>;
}
