import {PokemonsApi} from "../API/API";

const SET_POKEMONS = "SET_POKEMONS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const CATCH = "CATCH";
const SET_CAUGHT = "SET_CAUGHT";

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    pokemons: pokemons,
});

export const pokemonCatch = (id) => ({
    type: CATCH,
    id: id,
});

export const setCaughtPokemons = (pokemons) => ({
    type: SET_CAUGHT,
    pokemons: pokemons,
});

export const setTotalPokemonsCount = (totalDataCount) => ({
    type: SET_TOTAL_COUNT,
    totalDataCount: totalDataCount,
});

export const changeCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
});

const initialState = {
    pokemons: [],
    caughtPokemons: [],
    pageSize: 20,
    totalDataCount: 0,
    currentPage: 1,
    isCached: false,
    isLoading: false,
};

export const catchPokemon = (id, name, data) => async (dispatch) => {
    await PokemonsApi.catchPokemon(id, name, data);
    dispatch(pokemonCatch(id));
}

export const getPokemons = (currentPage, pageSize) => async (dispatch) => {
    let response = await PokemonsApi.getPokemons(currentPage, pageSize);
    dispatch(setPokemons(response.data));
    dispatch(setTotalPokemonsCount(response.headers["x-total-count"]));
}

export const getCaughtPokemons = () => async (dispatch) => {
    let response = await PokemonsApi.AllCaughtPokemons();
    dispatch(setCaughtPokemons(response.data));
}

export const getCurrentPage = (currentPage, pageSize) => async (dispatch) => {
    let response = await PokemonsApi.getPokemons(currentPage, pageSize);
    dispatch(setTotalPokemonsCount(response.headers["x-total-count"]));
    dispatch(setPokemons(response.data));
    dispatch(changeCurrentPage(currentPage, pageSize));
}

const PokemonsReducer = (state = initialState, action) => {
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
                caughtPokemons: [...state.caughtPokemons, state.pokemons.filter(p => p.caught === "true")],
            }
        }

        default:
            return state;
    }
}
export default PokemonsReducer;
