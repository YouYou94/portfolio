import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Main />} />
        <Route path="/portfolio/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
