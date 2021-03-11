import { connect } from 'react-redux';
import PokemonsApiComponent from './PokemonsAPIComponent';
import { getPokemons, getCurrentPage, catchPokemon, getCaughtPokemons} from '../../Redux/pokemon-reducer';

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        totalDataCount: state.pokemonsPage.totalDataCount,
        pageSize: state.pokemonsPage.pageSize,
        currentPage: state.pokemonsPage.currentPage,
    }
};

export default connect(mapStateToProps, {getPokemons, getCurrentPage, catchPokemon, getCaughtPokemons })(PokemonsApiComponent);
