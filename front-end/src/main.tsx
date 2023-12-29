import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/Router'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import MainState from './contexts/state'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainState>
        <Router />
      </MainState>
    </QueryClientProvider>
  </React.StrictMode>,
)
