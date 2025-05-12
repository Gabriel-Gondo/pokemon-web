import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePokemonAbilities } from '../hooks/usePokemonAbilities';
import { pokemonSchema, type PokemonFormData } from '../schemas/pokemonSchema';
import { PageTitle } from '../components/ui/PageTitle';
import { TextInput } from '../components/ui/TextInput';
import { Button } from '../components/ui/Button';
import { useToast } from '../hooks/useToast';

export function PokemonAbilities() {
  const [pokemonName, setPokemonName] = useState<string | null>(null);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PokemonFormData>({
    resolver: zodResolver(pokemonSchema),
    defaultValues: {
      pokemonName: '',
    },
  });

  const {
    data: abilities,
    isLoading,
    error,
  } = usePokemonAbilities(pokemonName);

  useEffect(() => {
    if (error) {
      const isNotFound =
        error instanceof Error && error.message.includes('não encontrado');
      showToast(
        error instanceof Error ? error.message : 'Erro ao buscar habilidades',
        isNotFound ? 'warning' : 'error'
      );
    }
  }, [error, showToast]);

  const onSubmit = (data: PokemonFormData) => {
    setPokemonName(data.pokemonName);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <PageTitle>Buscar Habilidades do Pokemon</PageTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mb-6"
      >
        <div className="flex gap-4">
          <TextInput
            {...register('pokemonName')}
            placeholder="Digite o nome do Pokemon"
            error={errors.pokemonName?.message}
          />
          <Button type="submit" isLoading={isLoading}>
            Buscar
          </Button>
        </div>
      </form>

      {abilities && abilities.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Habilidades:
          </h3>
          <ul className="space-y-2">
            {abilities.map((ability: string, index: number) => (
              <li
                key={index}
                className="p-3 bg-white rounded-md shadow-sm border border-gray-100"
              >
                {ability}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
