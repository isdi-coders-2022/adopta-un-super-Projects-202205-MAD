/* eslint-disable prefer-const */
import { useContext } from 'react';
import { MarvelContext } from '../../context/marvel-context';
import { CharacterModel } from '../../models/characters';

export function CardList({ superHero }: { superHero: CharacterModel }) {
    const { homePageCharacters } = useContext(MarvelContext);
    let template = (
        <ul>
            {homePageCharacters.map((item) => (
                <Card hero={item}></Card>
            ))}
        </ul>
    );

    return template;
}
