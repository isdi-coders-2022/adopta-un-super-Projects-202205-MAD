import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MarvelContext } from '../../context/marvel-context';
import { CharacterModel } from '../../models/characters';

export function Card({ superHero }: { superHero: CharacterModel }) {

    const hero = {
        id: 2342,
    name: "CACA",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
      extension: "jpg"} 
    }

    const { addFavorite, addDetails } =
    useContext(MarvelContext);
    // eslint-disable-next-line prefer-const
    let template = (
        <>
            <Link to='details'>

            <img
                className="card-image"
                src={`${superHero.thumbnail.path}/landscape_xlarge.${superHero.thumbnail.extension}`}
                alt={`Super: ${superHero.name}`}
                
            />

            </Link>
            <h2 className="card-name">{superHero.name}</h2>
            <img onClick={() => {addFavorite(hero)}} className="fav-icon" src="./static/unfavorite.png"></img>
        </>
    );

    return template;
}
