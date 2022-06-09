import { CLIEngine } from 'eslint';
import { userInfo } from 'os';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MarvelContext } from '../../context/marvel-context';
import { CharacterModel } from '../../models/characters';

export function Card({ superHero }: { superHero: CharacterModel }) {
    const { user } = useContext(MarvelContext);
    const { id, name, thumbnail } = superHero;
    const img = superHero.thumbnail?.path;
    const ext = superHero.thumbnail?.extension;
    console.log(img, ext, 'IMAGEN URL');

    const idCharacter = id;

    // const hero = {
    //     id:2,
    // name: "CACA",
    // thumbnail: {
    //   path: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
    //   extension: "jpg"}
    // }
    //    const hero2 = {...hero, user.nickname = 'dfd'}

    const { addFavorite } = useContext(MarvelContext);

    const name2 = user?.nickname as string;

    // eslint-disable-next-line prefer-const
    let template = (
        <>
            <Link to={`details/${superHero.id}`}>
                <img
                    className="card-image"
                    src={`${img}/landscape_xlarge.${ext}`}
                    alt={`Super: ${superHero.name}`}
                    // onClick={() => {addDetails(superHero)}}
                />
            </Link>
            <h2 className="card-name">{superHero.name}</h2>
            <img
                onClick={() => {
                    addFavorite({
                        img,
                        ext,
                        idCharacter,
                        name,
                        nickname: name2,
                    });
                }}
                className="fav-icon"
                src="./static/unfavorite.png"
            ></img>
        </>
    );

    return template;
}
