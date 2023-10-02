import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

import "./Dashboard.css";

import Current from "./Current";

import axios from "axios";

import EditUserPage from "./EditUserPage";

import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getUsers = async () => {
    try {
      const response = await axios({
        method: "GET",

        url: `${baseURL}/adminUser`,
      });

      setUsers(response.data);

      console.log("Users loaded:", response.data);
    } catch (error) {
      console.log("Error loading users", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${baseURL}/adminUser/${userId}`);

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log("Error deleting user");
    }
  };

  console.log("Rendered Users component");

  return (
    <div className="container-fluid ">
      <div className="row ">
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
            <table className="table_order table table-striped table-hover table_styles ">
              <thead>
                <tr>
                  <th scope="col">Name</th>

                  <th scope="col">Lastname</th>

                  <th scope="col">Username</th>

                  <th scope="col">Email</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.firstname}</td>

                    <td>{user.lastname}</td>

                    <td>{user.username}</td>

                    <td>{user.email}</td>

                    <td>
                      <span
                        type="button"
                        onClick={() => {
                          console.log("Edit button clicked. User data:", user);
                        }}
                      >
                        <Link
                          to={{
                            pathname: `/edit-user/${user._id}`,
                            state: {
                              user,
                            },
                          }}
                          className="edit-link me-1"
                        >
                          <svg
                            type="button"
                            className="btn me-2 p-0"
                            height="20"
                            width="30"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="30"
                          fill="brown"
                          className="bi bi-trash3-fill p-0"
                          viewBox="0 0 16 16"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </span>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
