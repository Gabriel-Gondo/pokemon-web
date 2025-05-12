// vite-plugin-generate-icons.ts
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export default function GenerateIconTypesPlugin(): Plugin {
  const iconsPath = path.resolve(__dirname, 'src/components/ui/icons');
  const outputPath = path.resolve(
    __dirname,
    'src/components/ui/icons/icon-types.ts'
  );

  function generateTypes() {
    const files = fs.readdirSync(iconsPath);
    const iconNames = files
      .filter((f) => f.endsWith('.svg'))
      .map((f) => `'${f.replace('.svg', '')}'`);

    const content = `export const AVAILABLE_ICONS = [${iconNames.join(', ')}] as const;
export type IconType = (typeof AVAILABLE_ICONS)[number];
`;

    fs.writeFileSync(outputPath, content);
    console.log(
      '[vite-plugin] icon-types.ts atualizado com',
      iconNames.length,
      'ícones.'
    );
  }

  return {
    name: 'generate-icon-types',

    buildStart() {
      generateTypes();
    },

    handleHotUpdate({ file, server }) {
      if (file.startsWith(iconsPath) && file.endsWith('.svg')) {
        console.log(
          '[vite-plugin] 🔄 SVG alterado, atualizando icon-types.ts...'
        );
        generateTypes();

        server.ws.send({
          type: 'full-reload',
        });
      }
    },

    configureServer(server) {
      const watcher = fs.watch(
        iconsPath,
        { recursive: true },
        (eventType, filename) => {
          if (filename && filename.endsWith('.svg')) {
            console.log(
              `[vite-plugin] Detected ${eventType} on file: ${filename}`
            );
            generateTypes();
            server.ws.send({
              type: 'full-reload',
            });
          }
        }
      );

      server.httpServer?.on('close', () => watcher.close());
    },
  };
}
