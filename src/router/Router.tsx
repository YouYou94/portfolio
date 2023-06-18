import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
