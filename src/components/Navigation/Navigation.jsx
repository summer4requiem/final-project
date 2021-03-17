import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <NavLink className={s.navigationLink}to="/sidebar">Caught</NavLink>
            <NavLink className={s.navigationLink} to="/">All Pokemons</NavLink>
        </nav>
    )
}

export default Navigation;
