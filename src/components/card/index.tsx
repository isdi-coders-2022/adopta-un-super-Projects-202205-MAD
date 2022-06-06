import { CharacterModel } from "../../models/characters";


export function Card( {superHero}: {superHero : CharacterModel}) {


    // eslint-disable-next-line prefer-const
    let template = (

        <li key={superHero.name}>
            <h2>
            {superHero.name}
            <img src={`${superHero.thumbnail.path}/landscape_xlarge.${superHero.thumbnail.extension}`} alt="" />
            <i className="emoji">
                <img src="../../static/unfavorite.png"></img>
                </i>
            </h2>
      </li>
    );

    return template;
}