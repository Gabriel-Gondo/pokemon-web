# PokémonWeb

O objetivo principal deste sistema é permitir que os usuários busquem as habilidades de um Pokémon com base no seu nome. O projeto foi criado utilizando o [Vite](https://vitejs.dev/) para otimizar o ambiente de desenvolvimento e entrega de uma aplicação rápida e moderna.

## Funcionalidades

- Buscar habilidades de Pokémon a partir do nome.

## Tecnologias Utilizadas

- **Vite**: Ferramenta de build e bundling de JavaScript que oferece uma experiência de desenvolvimento rápida e otimizada.
- **Axios**: Cliente HTTP para realizar requisições à API externa que fornece as informações dos Pokémon.
- **React Hook Form**: Biblioteca para gerenciamento de formulários.
- **TanStack Query**: Para gerenciamento de dados e requisições assíncronas.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizada.
- **Zod**: Biblioteca para validação de esquemas de dados.

## Como Rodar o Projeto Localmente

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/Gabriel-Gondo/pokemon-web
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   pnpm dev
   ```

4. Acesse o projeto no seu navegador através de [http://localhost:5173](http://localhost:5173).

## Como Funciona

O projeto utiliza uma API de dados de Pokémon para buscar as habilidades de cada Pokémon com base no nome fornecido pelo usuário. Quando o usuário digita o nome de um Pokémon e envia a busca, o sistema realiza uma requisição para a API e exibe as habilidades relacionadas ao Pokémon encontrado.

### Fluxo:

1. O usuário digita o nome do Pokémon na barra de pesquisa.
2. O sistema faz uma requisição para a API externa.
3. As habilidades do Pokémon são exibidas

## Estrutura do Projeto

```bash
├── public/ # Arquivos públicos (ícones, imagens, etc)
├── src/ # Código fonte da aplicação
│ ├── components/ # Componentes reutilizáveis da aplicação
│ ├── contexts/ # Contextos globais do React
│ ├── hooks/ # Hooks personalizados
│ ├── libs/ # Bibliotecas e utilitários
│ ├── pages/ # Páginas principais
│ ├── services/ # Funções auxiliares e API
│ ├── App.tsx # Componente principal da aplicação
│ ├── global.css # Estilos globais
│ └── main.tsx # Ponto de entrada da aplicação
├── index.html # HTML principal
├── package.json # Dependências e scripts
├── tsconfig.json # Configurações do TypeScript
├── vite-plugin-generate-icons.ts # Plugin criado para atualizar automaticamente o icons-type
└── README.md # Este arquivo

```
