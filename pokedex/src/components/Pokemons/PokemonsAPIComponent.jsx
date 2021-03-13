import React from 'react';
import Pokemons from './Pokemons';

class PokemonsApiComponent extends React.Component {
    componentDidMount = () => {
        let { currentPage, pageSize } = this.props;
        this.props.getPokemons(currentPage, pageSize);
    }

    changePageOnClick = (currentPage) => {
        let { pageSize } = this.props;
        this.props.getCurrentPage(currentPage, pageSize);
    }

    pickUpPokemon = (id, name, data)=>{
        this.props.catchPokemon(id, name, data);
    }

    render() {
        return (
            <Pokemons pickUpPokemon={this.pickUpPokemon} getPokemonCached={this.props.getPokemonCached} changePageOnClick={this.changePageOnClick} pokemons={this.props.pokemons} totalDataCount={this.props.totalDataCount} pageSize={this.props.pageSize} />
        )
    }
}

export default PokemonsApiComponent;
