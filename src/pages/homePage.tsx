import { useContext } from "react";
import { CardList } from "../components/cardList";
import { MarvelContext } from "../context/marvel-context";


export function HomePage() {
    const {pagination} = useContext(MarvelContext);
    console.log(pagination);
    return (
        <CardList></CardList>
        
    )
}