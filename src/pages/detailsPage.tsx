// import { iFavorites } from "../models/favorites";

import { useParams } from 'react-router-dom';

export function DetailsPage() {
    const { id } = useParams();

    return (
        <>
            <h1>{id}</h1>

            <div id="modal" className="hidden">
                <h2>update</h2>
            </div>
        </>
    )
}
