import React from 'react';
import { Route, Routes } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="" element={<div></div>} />
    </Routes>
  );
};

export default RootRouter;
