import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home } from '../pages';
import { Header } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
