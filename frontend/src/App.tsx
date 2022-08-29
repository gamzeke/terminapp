import RootView from './pages/root/RootView';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootView></RootView>
    </QueryClientProvider>
  );
}

export default App;
