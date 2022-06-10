/* eslint-disable prefer-const */
import { iFavorites } from '../../models/favorites';
import { CardFav } from '../cardFav';

export function CardListFav({ characters }: { characters: Array<iFavorites> }) {
    let template = (
        <ul className="card-list">
            {characters.map((item) => (
                <li key={item.name } className="card-list__card">
                    <CardFav superHero={item}></CardFav>
                </li>
            ))}
        </ul>
    );

    return template;
}
