import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import pokemonsReducer from "./pokemon-reducer"
import profileReducer from "./profile-reducer";

let rootReducer = combineReducers({
    pokemonsPage: pokemonsReducer,
    profilePage: profileReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;

