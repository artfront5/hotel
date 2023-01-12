import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';
import Home from './components/Home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
