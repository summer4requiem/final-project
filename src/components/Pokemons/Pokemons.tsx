import React from 'react';
import PokemonItem from './PokemonItem';
import Paginator from '../Paginator/Paginator';
import s from "./Pokemon.module.css";
import { PokemonTypes } from '../../types/pokemon-type';

type PropsTypes = {
    currentPage: number,
    changePageOnClick: (page: number) => void,
    pokemons:  Array<PokemonTypes>,
    totalDataCount: number,
    pageSize: number,
    pickUpPokemon: (id: number, name: string, date: string) => void,
}

const Pokemons:React.FC<PropsTypes> = (props) => {
    return (
        <section>
            <Paginator currentPage={props.currentPage} changePageOnClick={props.changePageOnClick} totalDataCount={props.totalDataCount} pageSize={props.pageSize} />
            <h1 className={s.PokemonsTitle}>Catch these pokemons</h1>
            <ul className={s.PokemonsList}>
                {props.pokemons.map(p => <PokemonItem pokemon={p} pickUpPokemon={props.pickUpPokemon} key={p.id} id={p.id} name={p.name} />)}
            </ul>
        </section>
    );
}

export default Pokemons;
