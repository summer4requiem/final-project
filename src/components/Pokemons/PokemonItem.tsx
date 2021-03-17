import {NavLink} from 'react-router-dom';
import s from "./Pokemon.module.css";
import React, {useState} from "react";
import {PokemonTypes} from '../../types/pokemon-type';

type PropsTypes = {
    id: number,
    name: string,
    pickUpPokemon: (id: number, name: string, date: string) => void,
    pokemon: PokemonTypes,
}

const PokemonItem: React.FC<PropsTypes> = (props) => {
    const [isCaught, setCaught] = useState(false);

    const setCaughtPokemon = (id: number, name: string) => {
        let date = new Date().toDateString();
        props.pickUpPokemon(id, name, date);
        setCaught(true);
    }

    return (
        <li key={props.id}>
            <div>
                <div className={s.pokemonItemName}>{props.name}</div>
                <div>
                    <NavLink to={`/profile/${props.id}`}>
                        {props.id < 721 ?
                            <img src={`src/pokemons/${props.id}.png`} alt={`pokemon${props.name}`} width={100}
                                 height={"auto"}/>
                            :
                            <img src={"https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"}
                                 alt={`pokemon${props.name}`} width={100} height={"auto"}/>
                        }
                    </NavLink>
                </div>
                <button onClick={()=>{setCaughtPokemon(props.id, props.name)}} disabled={isCaught || props.pokemon.caught } className={s.pokemonItemButton}>catch</button>
            </div>
        </li>
    );
}

export default PokemonItem;
