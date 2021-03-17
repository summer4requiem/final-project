import React from 'react';
import Pokemons from './Pokemons';
import { PokemonTypes } from '../../types/pokemon-type';

type PropsTypes = {
    currentPage: number,
    pageSize: number,
    getPokemons: (currentPage: number, pageSize: number) => void,
    getCurrentPage: (currentPage: number, pageSize: number) => void;
    totalUsersCount: number,
    catchPokemon: (id: number, name: string, date: string) => void,
    changePageOnClick: (page: number) => void,
    totalDataCount: number,
    pokemons: Array<PokemonTypes>,
}

class PokemonsApiComponent extends React.Component<PropsTypes> {
    componentDidMount = () => {
        let { currentPage, pageSize } = this.props;
        this.props.getPokemons(currentPage, pageSize);
    }

    changePageOnClick = (currentPage: number) => {
        let { pageSize } = this.props;
        this.props.getCurrentPage(currentPage, pageSize);
    }

    pickUpPokemon = (id: number, name: string, date: string) => {
        this.props.catchPokemon(id, name, date);
    }

    render() {
        return (
            <Pokemons currentPage={this.props.currentPage} pickUpPokemon={this.pickUpPokemon} changePageOnClick={this.changePageOnClick} pokemons={this.props.pokemons} totalDataCount={this.props.totalDataCount} pageSize={this.props.pageSize} />
        )
    }
}

export default PokemonsApiComponent;
