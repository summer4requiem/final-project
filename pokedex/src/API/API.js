import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `http://localhost:8000/`,
});

export const PokemonsApi = {
    getPokemons: (currentPage = 1, pageSize = 20) => {
        return axiosInstance.get(`pokemons?_page=${ currentPage }&_limit=${ pageSize }`).then(response => {
            return response;
        });
    },

    AllCaughtPokemons:() => {
        return axiosInstance.get(`pokemons/?caught=true`);
    },

    catchPokemon: (id, name, date) => {
        return axiosInstance.put(`pokemons/${ id }/`, {"caught": "true", "name": `${ name }`, "date": date});
    }
}

export const PokemonProfileAPI = {
    getPokemonProfile: (id) => {
        return axiosInstance.post(`pokemons/${ id }`).then(response => {
            return response;
        });
    },
}
