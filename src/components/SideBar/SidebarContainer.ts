import { connect } from 'react-redux';
import Sidebar from "./Sidebar";
import { getCaughtPokemons } from "../../Redux/pokemon-reducer";
import { AppStateType } from '../../Redux/redux-store';
import { PokemonTypes } from '../../types/pokemon-type';

type mapStateToPropsType = {
    caughtPokemons: Array<PokemonTypes>,
}

const mapStateToProps = (state: AppStateType) => {
    return <mapStateToPropsType>{
        caughtPokemons: state.pokemonsPage.caughtPokemons,
    }
}

export default connect(mapStateToProps, { getCaughtPokemons })(Sidebar);
