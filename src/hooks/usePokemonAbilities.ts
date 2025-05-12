import { useQuery } from '@tanstack/react-query';
import { fetchPokemonAbilities } from '../services/pokemonService';

export function usePokemonAbilities(pokemonName: string | null) {
  return useQuery({
    queryKey: ['pokemonAbilities', pokemonName],
    queryFn: () => fetchPokemonAbilities(pokemonName!),
    enabled: !!pokemonName,
    retry: false,
  });
}
