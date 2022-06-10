// import { iFavorites } from "../models/favorites";

import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MarvelContext } from '../context/marvel-context';
import { iFavorites } from '../models/favorites';

export function DetailsPage() {
    const {favoriteCharacters, homePageCharacters, deleteFavorite, addFavorite, user, openModal, openModalF} = useContext(MarvelContext);
    const { id } = useParams();

    let hero: iFavorites[] = [];

     hero = favoriteCharacters.filter(item => item.idCharacter == id);
    if(hero[0] === undefined) {
         hero = homePageCharacters.filter(item => item.id == id);
    }

    const name2 = user?.nickname as string;

    const modal = document.querySelector('#modal');

    return (
            <><h1>{hero[0].name}</h1><div className="details">
                <h2>textosss</h2>

            <img
                className="card-image"
                src={`${hero[0].thumbnail?.path}/landscape_xlarge.${hero[0].thumbnail?.extension}`}
                alt={`Super: ${hero[0].name}`} />

            {!!hero[0].favorite ? (
                <><img
                    onClick={() => {
                        deleteFavorite(hero[0].id);
                    } }
                    className="fav-icon"
                    src="http://localhost:3000/static/favorite.png"
                    alt="icon fav"
                ></img>
                <img
                    onClick={openModalF}
                    className="fav-icon update"
                    src="http://localhost:3000/static/update.png"
                    alt="icon fav"
                ></img></>
            ) : (
                <img
                    onClick={() => {
                        addFavorite({
                            thumbnail: {
                                path: hero[0].thumbnail?.path as string,
                                extension: hero[0].thumbnail?.extension as string,
                            },
                            idCharacter: Number(id),
                            name: hero[0].name,
                            nickname: name2,
                            favorite: true,
                        });
                    } }
                    className="fav-icon"
                    src="http://localhost:3000/static/unfavorite.png"
                    alt="no fav"
                ></img>
            )}

                { openModal && (
                    <div id="modal" className=" ">
                    <h2>Give a new name to your Hero</h2>

                    <input type="text" placeholder={hero[0].name} />

                    <div className="in-line-buttons">
                        <button className="button"
                            onClick={() => alert('yes')}
                        >
                            Yes
                        </button>
                        <button className="button"
                            onClick={openModalF}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                )

                }
           
        </div></>
    )
}
