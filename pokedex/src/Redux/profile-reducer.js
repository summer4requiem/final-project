import {PokemonProfileAPI} from "../API/API";
const SET_PROFILE = "SET_PROFILE";

export const setPokemonProfile = (profile) => ({
    type: SET_PROFILE,
    profile: profile,
});

const initialState = {
    profile: [{
        name:"test",
        id: 1,
    }]
};

export const getProfile = (id) => async (dispatch) => {
    const response = await PokemonProfileAPI.getPokemonProfile(id);
    dispatch(setPokemonProfile(response.data));
};

const ProfileReducer = (state = initialState, action) => {
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
export default ProfileReducer;
