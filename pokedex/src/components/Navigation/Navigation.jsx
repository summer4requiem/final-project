import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <NavLink className={s.navigationLink}to="/sidebar">Catched</NavLink>
            <NavLink className={s.navigationLink} to="/">All Pokemons</NavLink>
            <NavLink className={s.navigationLink} to="/pokemon">Pokemon Profile</NavLink>
        </nav>
    )
}

export default Navigation;
