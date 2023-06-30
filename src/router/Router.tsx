import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from '../pages';
import { Header } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};
