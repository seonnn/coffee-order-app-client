import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'src/@service/admin/pages/LoginPage';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/admin">
        <Route path="login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
};

export default RootRouter;
