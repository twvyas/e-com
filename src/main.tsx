import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';

// const client = new QueryClient();
// const rootElement = document.getElementById('root')!;

// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <QueryClientProvider client={client}>
//     <App />
//   </QueryClientProvider>
// );





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
