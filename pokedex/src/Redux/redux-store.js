import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

import PokemonsReducer from "./pokemon-reducer"
import ProfileReducer from "./profile-reducer";

let rootReducer = combineReducers({
    pokemonsPage: PokemonsReducer,
    profilePage: ProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;