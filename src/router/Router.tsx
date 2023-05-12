import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeContainer, AboutContainer, ProjectContainer } from '../containers';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<HomeContainer />} />
        <Route path="/portfolio/about" element={<AboutContainer />} />
        <Route path="/portfolio/project" element={<ProjectContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
