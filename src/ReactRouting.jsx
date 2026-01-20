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

export default function ReactRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route index element={<AddNote />} />
          <Route path="Reminder" element={<Riminder />} />
          <Route path="Labels" element={<Lables />} />
          <Route path="Archive" element={<Archive />} />
          <Route path="Trash" element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

