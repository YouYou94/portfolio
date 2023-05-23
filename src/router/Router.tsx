import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import { Details, Portfolio } from '../pages';

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
