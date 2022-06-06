import { CharacterModel } from '../../models/characters';

export function Card({ superHero }: { superHero: CharacterModel }) {
    // eslint-disable-next-line prefer-const
    let template = (
        <>
            <img
                src={`${superHero.thumbnail.path}/landscape_xlarge.${superHero.thumbnail.extension}`}
                alt={`Super: ${superHero.name}`}
            />
            <h2>{superHero.name}</h2>
            <img src="../../static/840_560.jpg"></img>
        </>
    );

    return template;
}
