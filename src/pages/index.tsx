import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const HomeLazy = React.lazy(() => import(`./Home`));
const CirclesPageLazy = React.lazy(() => import(`./CirclesPage`));
const PurpleCirclesPageLazy = React.lazy(() => import(`./PurpleCirclesPage`));
const WrongLazy = React.lazy(() => import(`./WrongPage`));

// A react component with react-router routes.
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeLazy />} />
      <Route path="circles">
        <Route index element={<CirclesPageLazy />} />
        <Route path="purple-circles" element={<PurpleCirclesPageLazy />} />
      </Route>
      <Route path="*" element={<WrongLazy />} />
    </Route>
  </Routes>
);
