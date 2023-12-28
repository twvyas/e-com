import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const client = new QueryClient();
const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
