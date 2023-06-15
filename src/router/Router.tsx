import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages';
import { CommonHeader } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <CommonHeader />
      <Routes>
        <Route path="/portfolio" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
