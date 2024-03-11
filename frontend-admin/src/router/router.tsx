import Test from '@/pages/Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router
