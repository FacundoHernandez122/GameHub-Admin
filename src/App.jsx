import { useState } from "react";

import { Routes, Route, Outlet } from "react-router-dom";

import Admin from "./components/Admin";

import Dashboard from "./components/Dashboard";

import Products from "./components/Products";

import Users from "./components/Users";

import Orders from "./components/Orders";

import Login from "./components/Login";

import EditUserPage from "./components/EditUserPage";
import EditGamePage from "./components/EditGamePage";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/users" element={<Users />} />

      <Route path="/orders" element={<Orders />} />

      <Route path="/products" element={<Products />} />

      <Route path="/edit-user/:userId" element={<EditUserPage />} />
      <Route path="/edit-game/:gameId" element={<EditGamePage />} />
    </Routes>
  );
}

export default App;
