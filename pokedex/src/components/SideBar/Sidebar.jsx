import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css";
import React from 'react';

class Sidebar extends React.Component {
    componentDidMount() {
        this.props.getCaughtPokemons();
    }

    render() {
        return (
            <section>
                <h2 className={ s.CaughtPokemonsTitle }>Caught</h2>
                <ul className={ s.CaughtPokemonsList }>
                    { this.props.caughtPokemons.map(p => <li>
                        <NavLink to={ "/profile/" + p.id }>
                            <div>
                                <img src={ process.env.PUBLIC_URL + `/pokemons/${ p.id }.png` }
                                     alt={ `pokemon ${ p.name } image` } width={ 100 }/>
                            </div>
                            <span>{ p.name }</span>
                            <span>{ p.date }</span>
                        </NavLink></li>) };
                </ul>
            </section>
        )
    }

}

export default Sidebar;
