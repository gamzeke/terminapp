import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootView from './admin/root/RootView';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootView></RootView>
    </QueryClientProvider>
  );
}

export default App;
