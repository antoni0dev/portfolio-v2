import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/normalize.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes.jsx';
import MusicProvider from './providers/MusicProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicProvider>
      <RouterProvider router={router} />
    </MusicProvider>
  </StrictMode>
);
