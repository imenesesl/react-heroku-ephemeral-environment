import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import '@root/style/index.scss';
import { AppProvider } from '@core/providers/app';
import { RouterProvider } from '@core/providers/router';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppProvider>
        <RouterProvider />
      </AppProvider>
    </StrictMode>
  );
}
