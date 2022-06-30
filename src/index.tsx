import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthModal from './components/AuthModal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthModal />
  </React.StrictMode>
);