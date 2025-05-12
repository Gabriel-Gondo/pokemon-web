import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PokemonAbilities } from './pages/PokemonAbilities';
import { ToastProvider } from './contexts/ToastProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <div className="min-h-screen bg-gray-100 py-8">
          <PokemonAbilities />
        </div>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
