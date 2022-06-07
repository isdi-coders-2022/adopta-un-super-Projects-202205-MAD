/* eslint-disable prefer-const */
import { useContext } from 'react';
import { MarvelContext } from '../../context/marvel-context';
import { Card } from '../card';

export function CardList() {
    const { homePageCharacters } = useContext(MarvelContext);

    let template = (
        <ul className="card-list">
            {homePageCharacters.map((item) => (
                <li key={item.name} className="card-list__card">
                    <Card superHero={item}></Card>
                </li>
            ))}
        </ul>
    );

    return template;
}
