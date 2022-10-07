import { pokeApi } from "../api";
import { Pokemon, PokemonsListResponse } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

}

export const get151Pokemons = async () => {

  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151');

  return data;

}