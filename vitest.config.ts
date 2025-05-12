import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    reporters: ['default', 'html'],
    exclude: [...configDefaults.exclude, 'caminhos/adicionais'],
  },
});
