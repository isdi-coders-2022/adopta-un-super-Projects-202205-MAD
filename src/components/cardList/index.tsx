/* eslint-disable prefer-const */
import { useContext } from 'react';
import { MarvelContext } from '../../context/marvel-context';
import { Card } from '../card';

export function CardList() {
    const { homePageCharacters } = useContext(MarvelContext);
    let template = (
        <ul>
            {homePageCharacters.map((item) => (
                <li key={item.name}>
                    <Card superHero={item}></Card>
                </li>
            ))}
        </ul>
    );

    return template;
}
