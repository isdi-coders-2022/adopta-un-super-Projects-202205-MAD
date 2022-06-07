import { CharacterModel } from '../../models/characters';

export function Card({ superHero }: { superHero: CharacterModel }) {
    // eslint-disable-next-line prefer-const
    let template = (
        <>
            <img
                className="card-image"
                src={`${superHero.thumbnail.path}/landscape_xlarge.${superHero.thumbnail.extension}`}
                alt={`Super: ${superHero.name}`}
            />
            <h2 className="card-name">{superHero.name}</h2>
            <img className="fav-icon" src="./static/unfavorite.png"></img>
        </>
    );

    return template;
}
