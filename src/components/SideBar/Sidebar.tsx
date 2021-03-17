import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import React from 'react';
import { PokemonTypes } from "../../types/pokemon-type";

type PropsTypes = {
    getCaughtPokemons: () => void,
    caughtPokemons: Array<PokemonTypes>,
}

class Sidebar extends React.Component<PropsTypes> {
    componentDidMount() {
        this.props.getCaughtPokemons();
    }

    render() {
        return (
            <section>
                <h2 className={s.caughtPokemonsTitle}>Caught</h2>
                <ul className={s.caughtPokemonsList}>
                    {this.props.caughtPokemons.map(p =>
                        <div className={s.caughtPokemonsWrapper} key={p.id}>
                            <li>
                                <NavLink to={"/profile/" + p.id}>
                                    <div>
                                        <img src={p.id < 721 ? `src/pokemons/${p.id}.png` :'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
                                            alt={`pokemon ${p.name} image`} width={100} />
                                    </div>
                                </NavLink>
                                <div className={s.sideBarInfo}>
                                    <span className={s.sideBarInfoName}>{p.name}</span>
                                    <span className={s.sideBarInfoDate}>{p.date}</span>
                                </div>
                            </li>
                        </div>
                    )}
                </ul>
            </section>
        )
    }
}

export default Sidebar;
