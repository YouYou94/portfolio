import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home } from '../pages';
import Project from '../pages/Project';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};
