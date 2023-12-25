import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './providers/ThemeProvider';
import '../node_modules/normalize.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
