import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `http://localhost:8000/`,
});

export const PokemonsApi = {
    getAllPokemons: (currentPage = 1, pageSize = 20) => {
        return axiosInstance.get(`pokemons?_page=${ currentPage }&_limit=${ pageSize }`).then(response => {
            return response;
        });
    },

    AllCaughtPokemons: () => {
        return axiosInstance.get(`pokemons/?caught=true`);
    },

    catchPokemon: (id, name, date) => {
        return axiosInstance.put(`pokemons/${ id }/`, {"caught": true, "name": `${ name }`, "date": date});
    }
}

export const PokemonProfileAPI = {
    getPokemonProfile: (id= 1) => {
        return axiosInstance.get(`pokemons/${ id }`).then(response => {
            return response;
        });
    },
}
