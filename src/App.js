import './App.css'
import AllRoutes from './routes/AllRoutes'
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
  <AllRoutes />
  </QueryClientProvider>
}

export default App
