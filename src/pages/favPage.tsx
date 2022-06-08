// import { useContext } from "react";
import { useContext, useEffect } from 'react';
import { CardList } from '../components/cardList';
import { MarvelContext } from '../context/marvel-context';
// import { MarvelContext } from "../context/marvel-context";
export function FavPage() {


    const { favoriteCharacters, getFavorites, user } = useContext(MarvelContext);
 
    // const {pagination, pages} = useContext(MarvelContext);



    return <>{<CardList characters={favoriteCharacters}></CardList>}</>;
}
