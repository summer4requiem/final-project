import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {PokemonsApi} from "../API/API";
import {PokemonTypes} from "../types/pokemon-type";
import {AppStateType} from "./redux-store";

const SET_POKEMONS = "SET_POKEMONS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const CATCH = "CATCH";
const SET_CAUGHT = "SET_CAUGHT";
type ActionsTypes =
    setPokemonsType
    | setPokemonCaughtType
    | setCaughtPokemonsType
    | setTotalPokemonsCountType
    | changeCurrentPageType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Action<string>>;
type DispatchType = Dispatch<ActionsTypes>

type setPokemonsType = {
    type: typeof SET_POKEMONS,
    pokemons: Array<PokemonTypes>
}

type setPokemonCaughtType = {
    type: typeof CATCH,
    id: number,
}
type setCaughtPokemonsType = {
    type: typeof SET_CAUGHT,
    pokemons: Array<PokemonTypes>,
}
type setTotalPokemonsCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalDataCount: number,
}
type changeCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number,
}

const setPokemons = (pokemons: Array<PokemonTypes>): setPokemonsType => ({
    type: SET_POKEMONS,
    pokemons: pokemons,
});

const setPokemonCaught = (id: number): setPokemonCaughtType => ({
    type: CATCH,
    id: id,
});

const setCaughtPokemons = (pokemons: Array<PokemonTypes>): setCaughtPokemonsType => ({
    type: SET_CAUGHT,
    pokemons: pokemons,
});

const setTotalPokemonsCount = (totalDataCount: number): setTotalPokemonsCountType => ({
    type: SET_TOTAL_COUNT,
    totalDataCount: totalDataCount,
});

const changeCurrentPage = (currentPage: number): changeCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
});

const initialState = {
    pokemons: [] as Array<PokemonTypes>,
    caughtPokemons: [] as Array<Object>,
    pageSize: 20,
    totalDataCount: 0,
    currentPage: 1,
};

type initialStateType = typeof initialState;

export const catchPokemon = (id: number, name: string, data: string): ThunkType => async (dispatch: DispatchType) => {
    await PokemonsApi.catchPokemon(id, name, data);
    dispatch(setPokemonCaught(id));
}

export const getPokemons = (currentPage: number, pageSize: number): ThunkType => async (dispatch: DispatchType) => {
    let response = await PokemonsApi.getAllPokemons(currentPage, pageSize);
    dispatch(setPokemons(response.data));
    dispatch(setTotalPokemonsCount(response.headers["x-total-count"]));
}

export const getCaughtPokemons = (): ThunkType => async (dispatch: DispatchType) => {
    let response = await PokemonsApi.AllCaughtPokemons();
    dispatch(setCaughtPokemons(response.data));
}

export const getCurrentPage = (currentPage: number, pageSize: number): ThunkType => async (dispatch: DispatchType) => {
    let response = await PokemonsApi.getAllPokemons(currentPage, pageSize);
    dispatch(setTotalPokemonsCount(response.headers["x-total-count"]));
    dispatch(setPokemons(response.data));
    dispatch(changeCurrentPage(currentPage));
}

const pokemonsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_POKEMONS: {
            return {
                ...state,
                pokemons: action.pokemons,
            }
        }
        case SET_CAUGHT: {
            return {
                ...state,
                caughtPokemons: action.pokemons,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalDataCount: action.totalDataCount,
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case CATCH: {
            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, state.pokemons.filter(p => p.caught === true)],
            }
        }

        default:
            return state;
    }
}
export default pokemonsReducer;
