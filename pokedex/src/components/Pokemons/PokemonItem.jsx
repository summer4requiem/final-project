import { NavLink } from 'react-router-dom';
import s from "./Pokemon.module.css";
import React, { useState } from "react";

const PokemonItem = (props) => {
    const [isCaught, setCathed] = useState(false);
    const setCaughtPokemon=(id, name)=>{
        let date = new Date().toDateString();
        props.pickUpPokemon(id, name, date);
        setCathed(true);
    }

    return (
        <li key={props.id} className={s.pokemonItem}>
            <div>
                <div className={s.pokemonItemName}>{props.name}</div>
                <div>
                    <NavLink to={`/pokemon/${props.id}`}>
                        <img src={process.env.PUBLIC_URL + `/pokemons/${props.id}.png`} alt={`pokemon${props.name}`} width={100} height={"auto"} />
                    </NavLink>
                </div>
                <button onClick={()=>{setCaughtPokemon(props.id, props.name)}} disabled={isCaught || props.pokemon.caught } className={s.pokemonItemButton}>catch</button>
            </div>

        </li>
    );
}

export default PokemonItem;
