import { connect } from 'react-redux';
import PokemonsApiComponent from './PokemonsAPIComponent';
import { getPokemons, getCurrentPage, catchPokemon } from '../../Redux/pokemon-reducer';
import { PokemonTypes } from '../../types/pokemon-type';
import { AppStateType } from '../../Redux/redux-store';

type mapStateToPropsType = {
    currentPage: number,
    pageSize: number,
    pokemons: Array<PokemonTypes>,
    totalDataCount: number,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        totalDataCount: state.pokemonsPage.totalDataCount,
        pageSize: state.pokemonsPage.pageSize,
        currentPage: state.pokemonsPage.currentPage,
};
}

export default connect(mapStateToProps, {getPokemons,getCurrentPage,catchPokemon})(PokemonsApiComponent);

