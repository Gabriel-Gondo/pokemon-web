import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import GenerateIconTypesPlugin from './vite-plugin-generate-icons';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
    svgr(),
    GenerateIconTypesPlugin(),
  ],
});
