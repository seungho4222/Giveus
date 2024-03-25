import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// production mode에서 주석 제거
if (process.env.NODE_ENV === 'production') {
  console = window.console || {}
  console.log = function no_console() {}
  console.warn = function no_console() {}
  console.error = function () {}
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
)
