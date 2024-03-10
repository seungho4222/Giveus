import App from '@/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        {/* <Route path="/gallery" element={<DetailCardPage />}>
          <Route path=":cardId" element={<DetailCard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router
