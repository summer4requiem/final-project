import { connect } from 'react-redux';
import Sidebar from "./Sidebar";
import {getCaughtPokemons} from "../../Redux/pokemon-reducer";

const mapStateToProps = (state)=>{
    return{
        caughtPokemons: state.pokemonsPage.caughtPokemons,
    }
}

export default connect(mapStateToProps, {getCaughtPokemons})(Sidebar);
