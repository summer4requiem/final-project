import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let path = "/profile/" + props.caughtPokemons.id;
    return (
        <aside>
            <h2>Caught</h2>
            <ul>
                {props.caughtPokemons.map(p =><li>
                    <NavLink to={ path }>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/pokemons/${p.id}.png`} alt={`pokemon ${p.name} image`}/>
                    </div>
                </NavLink></li>) };
            </ul>
        </aside>
    )
}

export default Sidebar;
