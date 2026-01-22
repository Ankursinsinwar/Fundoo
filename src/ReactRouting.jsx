import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/SignIn/Signin';
import Riminder from './components/Riminder/Riminder';
import Lables from './components/Lables/Lables';
import Archive from './components/Archive/Archive';
import Trash from './components/Trash/Trash';
import AddNote from './components/AddNote/AddNote';
import ProtectedRoute from './Routers/ProtectedRouter';
import AuthRoute from './Routers/AuthRouter';

export default function ReactRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><SignUp /></AuthRoute>} />
        <Route path="/signin" element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route index element={<AddNote />} />
          <Route path="reminder" element={<Riminder />} />
          <Route path="labels" element={<Lables />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

