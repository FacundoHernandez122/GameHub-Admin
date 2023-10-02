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

  /* const getGames = async () => {

    try {

      const response = await axios({

        method: "GET",

        url: "${baseURL}/games",

      });

      setGames(response.data);

      console.log(response.data);

    } catch (error) {

      console.log("error al cargar los juegos");

    }

  };

 

  useEffect(() => {

    getGames();

  }, []); */

  return (
    <div className="container content hv-100">
      <div className="row">
        <Dashboard />
      </div>
    </div>
  );
}

export default Admin;
