import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@/styles/globalStyle.ts';
import Router from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Router/>
      <App/>
    </RecoilRoot>
  </React.StrictMode>,
);
