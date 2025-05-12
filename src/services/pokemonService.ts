import axios, { type AxiosResponse } from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

interface Ability {
  ability: { name: string };
}

interface Pokemon {
  abilities: Ability[];
}

export async function fetchPokemonAbilities(name: string): Promise<string[]> {
  try {
    const response: AxiosResponse<Pokemon> = await axios.get(
      `${API_URL}/pokemon/${name.toLowerCase()}`
    );
    return response.data.abilities.map((ability) => ability.ability.name);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('Pokemon não encontrado');
    }
    throw new Error('Erro ao buscar habilidades do Pokemon');
  }
}
