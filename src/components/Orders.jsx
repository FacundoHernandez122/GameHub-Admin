import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Current from "./Current";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGroup, Dropdown } from 'react-bootstrap';


function Orders() {
  const [orders, setOrders] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getOrders = async () => {
    try {
      const response = await axios.get(`${baseURL}/adminOrder`);
      setOrders(response.data);
      console.log("Orders loaded:", response.data);
    } catch (error) {
      console.log("Error loading Orders", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`${baseURL}/adminOrder/${orderId}`);

      setOrders((prevOrder) =>
        prevOrder.filter((order) => order._id !== orderId)
      );
    } catch (error) {
      console.log("Error deleting user");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 side_back">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8 line_bar">
            <div className="welcome_admin">
              <h3 className="p-3">Hello, Admin!</h3>
              <div className="admin_icon">
                <img src="/Hongo.png" alt="" />
              </div>
            </div>
            <div className="current_box">
              <Current />
            </div>
            <div className="container recent_order">
              <table className="table_order table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">Games</th>
                    <th scope="col">Status</th>
                    <th scope="col">Subtotal</th>
                    <th className="text-center" scope="col">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order.user}</td>
                      <td>
                        {order.games.map((game) => (
                          <div key={game._id}>{game.name}</div>
                        ))}
                      </td>
                      <td>{order.status}</td>
                      <td>${order.subtotal.toFixed(2)}</td>
                      <td className="text-center">{order.createdAt}</td>
                      <td>
                      <ButtonGroup>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Delivered
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cancelled</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
