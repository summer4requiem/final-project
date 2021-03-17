import {PokemonProfileAPI} from "../API/API";
import {PokemonTypes} from "../types/pokemon-type";
const SET_PROFILE = "SET_PROFILE";

type setPokemonsProfileType = {
    type: typeof SET_PROFILE,
    profile: PokemonTypes,
}

export const setPokemonProfile = (profile: PokemonTypes): setPokemonsProfileType => ({
    type: SET_PROFILE,
    profile: profile,
});

type ActionsTypes = setPokemonsProfileType ;
type initialStateTypes  = typeof initialState;

const initialState = {
    profile: {} as PokemonTypes | null,
};

export const getProfile = (id: number) => async (dispatch: any) => {
    const response = await PokemonProfileAPI.getPokemonProfile(id);
    dispatch(setPokemonProfile(response.data));
};

const profileReducer = (state = initialState, action: ActionsTypes): initialStateTypes => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        default:
            return state;
    }
}
export default profileReducer;
