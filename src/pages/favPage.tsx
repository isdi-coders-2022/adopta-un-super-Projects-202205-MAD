// import { useContext } from "react";
import { useContext, useEffect } from 'react';
import { CardListFav } from '../components/cardListFav';
import { MarvelContext } from '../context/marvel-context';

export function FavPage() {
    const { favoriteCharacters, openModal, openModalF } = useContext(MarvelContext);

    return (
        <>
            {<CardListFav characters={favoriteCharacters}></CardListFav>}

            { openModal && (
                    <div id="modal" className=" ">
                    <h2>Give a new name to your Hero</h2>

                    <input type="text" placeholder={favoriteCharacters[0].name} />

                    <div className="in-line-buttons">
                        <button className="button"
                            
                        >
                            Save
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
            
        </>
    )
    
}
