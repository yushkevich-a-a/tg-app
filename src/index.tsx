import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BGWrapper } from './background/BGWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BGWrapper>
      <App />
    </BGWrapper>
  </React.StrictMode>
);

