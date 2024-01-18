import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@root/App.tsx';
import '@root/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
