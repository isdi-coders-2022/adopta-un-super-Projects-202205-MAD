// import { useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect } from 'react';
import { CardList } from '../components/cardList';
import { MarvelContext } from '../context/marvel-context';
// import { MarvelContext } from "../context/marvel-context";
export function FavPage() {
    const { isAuthenticated, user } = useAuth0();
    console.log(isAuthenticated);
    console.log(user);

    const { favoriteCharacters, getFavorites } = useContext(MarvelContext);
    // const {pagination, pages} = useContext(MarvelContext);

    useEffect(() => {
        const favorites = getFavorites(user?.nickname as string);
        console.log('caca', favorites);
    }, []);

    return <>{<CardList characters={favoriteCharacters}></CardList>}</>;
}
