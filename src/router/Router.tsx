import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio, Details } from '../pages';
import { Nav } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/project/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
