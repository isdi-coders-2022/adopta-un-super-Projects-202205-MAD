/* eslint-disable prefer-const */
import { CharacterModel } from '../../models/characters';
import { Card } from '../card';

export function CardList({
    
    characters,
}: {
    characters: Array<CharacterModel>;
}) {
    let template = (
        <ul className="card-list">
            {characters.map((item) => (
                <li key={item.name} className="card-list__card">
                    <Card superHero={item}></Card>
                </li>
            ))}
        </ul>
    );

    return template;
}
