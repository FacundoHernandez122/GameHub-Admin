import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EditUserPage.css";
import "./Sidebar.css";
import { useParams } from "react-router-dom";

const EditUserPage = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const [newFirstName, setNewFirstName] = useState("");

  const [newLastName, setNewLastName] = useState("");

  const [newEmail, setNewEmail] = useState("");

  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/adminUser/${userId}`).then((response) => {
      const userData = response.data;

      setUser(userData);

      setNewFirstName(userData.firstname);

      setNewLastName(userData.lastname);

      setNewEmail(userData.email);

      setNewUsername(userData.username); // Set the new username from the response

      console.log("User data received:", userData);
    });
  }, [userId]);

  const handleSave = async () => {
    try {
      const updatedUserData = {
        firstname: newFirstName,

        lastname: newLastName,

        email: newEmail,

        username: newUsername, // Include the new username in the request
      };

      console.log("Updated user data to send:", updatedUserData);

      axios.patch(
        `${baseURL}/adminUser/${userId}`,

        updatedUserData
      );
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div className="container-center ">
      <div className="col-lg-2 col-md-3 col-sm-4 side_back">
        <Sidebar />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-8 d-flex justify-content-center mt-5">
        <div className="edit_user">
          <div className="title_edit">
            <h2>
              Edit User: {user.firstname} {user.lastname}
            </h2>

            <div className="content_edit">
              <label>First Name:</label>

              <input
                className="input_name"
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
            </div>

            <div className="content_edit">
              <label>Last Name </label>

              <input
                className="input_last"
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
            </div>

            <div className="content_edit">
              <label>Email </label>

              <input
                className="input_email"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>

            <div className="content_edit">
              <label>Username </label>
              <input
                className="input_username"
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>

            <div className="save_user">
              <button
                className="save_button_user"
                type="button"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
          <Link to="/users">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-arrow-return-left bg-dark rounded-circle p-1 mb-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
