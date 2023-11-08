import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio, Details } from '../pages';
import { Header } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/project/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
