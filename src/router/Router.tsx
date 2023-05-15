import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home, Project } from '../pages';
import { Menu } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};
