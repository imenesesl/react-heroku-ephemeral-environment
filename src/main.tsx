import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import '@root/style/index.scss';
import { AuthenticationProvider } from '@core/providers/authentication';
import { RouterProvider } from '@core/providers/router';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthenticationProvider>
        <RouterProvider />
      </AuthenticationProvider>
    </StrictMode>
  );
}
