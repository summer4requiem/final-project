import React from 'react';
import PokemonItem from './PokemonItem';
import Paginator from '../Paginator/Paginator';
import s from "./Pokemon.module.css";

const Pokemons = (props) => {
    return (
        <section>
             <Paginator changePageOnClick={props.changePageOnClick} totalDataCount={props.totalDataCount} pageSize={props.pageSize} />
            <h1 className={s.PokemonsTitle}>Catch this Pokemons</h1>
            <ul className={s.PokemonsList}>
                {props.pokemons.map(p => <PokemonItem pokemon={p}  pickUpPokemon={props.pickUpPokemon} className={s.pokemonItem} key={p.id} id={p.id} name={p.name} />)}
            </ul>
        </section>
    );
}

export default Pokemons;
