import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { PATHS } from './lib/constants';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SkillsPage from './pages/SkillsPage';
import WorkPage from './pages/WorkPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: PATHS.root,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        element: <AboutPage />,
        path: PATHS.about
      },
      {
        element: <BlogPage />,
        path: PATHS.blog
      },
      {
        element: <SkillsPage />,
        path: PATHS.skills
      },
      {
        element: <WorkPage />,
        path: PATHS.work
      }
    ]
  }
]);
