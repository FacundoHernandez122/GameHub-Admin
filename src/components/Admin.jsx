import { Link, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { useEffect } from "react";

import "./Admin.css";

import "./Sidebar.css";

import "./Dashboard.css";

import "./Orders.css";

import Sidebar from "./Sidebar";

import Users from "./Users";

import Orders from "./Orders";

import Products from "./Products";

import Dashboard from "./Dashboard";

function Admin() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [games, setGames] = useState([]);

  return (
    <div className="container content hv-100">
      <div className="row">
        <Dashboard />
      </div>
    </div>
  );
}

export default Admin;
