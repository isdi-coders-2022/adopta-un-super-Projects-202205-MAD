/* eslint-disable prefer-const */
import { iFavorites } from '../../models/favorites';
import { Card } from '../card';

export function CardList({ characters }: { characters: Array<iFavorites> }) {
    let template = (
        <ul className="card-list">
            {characters.map((item) => (
                <li key={item.name } className="card-list__card">
                    <Card superHero={item}></Card>
                </li>
            ))}
        </ul>
    );

    return template;
}
