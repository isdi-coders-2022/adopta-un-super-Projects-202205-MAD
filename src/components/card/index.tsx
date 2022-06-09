import { CLIEngine } from 'eslint';
import { userInfo } from 'os';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MarvelContext } from '../../context/marvel-context';
import { iFavorites } from '../../models/favorites';

export function Card({ superHero }: { superHero: iFavorites }) {
    const { user } = useContext(MarvelContext);
    const { id, name} = superHero;
    const img = superHero.thumbnail?.path;
    const ext = superHero.thumbnail?.extension;
    
    console.log(img, ext, 'IMAGEN URL');

    
    const idCharacter = id;

    const idString : number | undefined = id

    // const hero = {
    //     id:2,
    // name: "CACA",
    // thumbnail: {
    //   path: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
    //   extension: "jpg"}
    // }
    //    const hero2 = {...hero, user.nickname = 'dfd'}

    const { addFavorite, deleteFavorite } = useContext(MarvelContext);

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
            {superHero.favorite ? 
            <img
            
            onClick={() => {
                deleteFavorite(
                    idString
                );
            }}
            className="fav-icon"
            src="./static/favorite.png"
        ></img> : <img
        onClick={() => {
            addFavorite({
                thumbnail:{
                    path:img as string,
                    extension: ext as string
                },
                idCharacter,
                name,
                nickname: name2,
                favorite : true, 
            });
        }}
        className="fav-icon"
        src="./static/unfavorite.png"
    ></img>}
            
        </>
    );

    return template;
}
