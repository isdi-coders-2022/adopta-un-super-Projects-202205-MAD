import { useContext } from "react";
import { CardList } from "../components/cardList";
import { MarvelContext } from "../context/marvel-context";


export function HomePage() {
    const {pagination, pages} = useContext(MarvelContext);
    // console.log(pagination);
    return (
        <>
            <CardList></CardList>
            <button onClick={() => {pages(pagination + 20)}}>Next</button>
        </>
    )
}