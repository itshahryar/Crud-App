// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import CreateUser from "./components/CreateUser/CreateUser.js"
import GetAllUsers from './components/GetAllUsers/GetAllUsers.js';
import GetUserDataById from "./components/GetUserDataById/GetUserDataById.js"
import UpdateUserById from './components/UpdateUserById/UpdateUserById.js';
import DeleteUserById from './components/DeleteUserById/DeleteUserById.js';
import DeleteAllUsers from './components/DeleteAllUsers/DeleteAllUsers.js';
import GetSpecificUsers from './components/GetSpecificUsers/GetSpecificUsers.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/get-all-users" element={<GetAllUsers />} />
          <Route path="/get-data-byId" element={<GetUserDataById />} />
          <Route path="/update-byId" element={<UpdateUserById />} />
          <Route path="/delete" element={<DeleteUserById />} />
          <Route path="/delete-all" element={<DeleteAllUsers />} />
          <Route path="/get-specific" element={<GetSpecificUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

