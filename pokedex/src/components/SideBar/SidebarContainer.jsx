import { connect } from 'react-redux';
import Sidebar from "./Sidebar";

const mapStateToProps = (state)=>{
    return{
        caughtPokemons: state.pokemonsPage.caughtPokemons,
    }
}


export default connect(mapStateToProps, {})(Sidebar);
