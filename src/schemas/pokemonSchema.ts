import { z } from 'zod';

export const pokemonSchema = z.object({
  pokemonName: z
    .string()
    .min(1, 'O nome do Pokemon é obrigatório')
    .max(50, 'O nome do Pokemon deve ter no máximo 50 caracteres')
    .regex(
      /^[a-zA-Z0-9-]+$/,
      'O nome do Pokemon deve conter apenas letras, números e hífen'
    )
    .transform((val) => val.toLowerCase().trim()),
});

export type PokemonFormData = z.infer<typeof pokemonSchema>;
