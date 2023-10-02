import React, { useState } from "react";

import axios from "axios";

function AddUserModal({ onSave }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    address: "",
    phone: "",
    email: "",
    orders: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,

      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Data to be sent:", formData);

      const response = await axios.post(
        `${baseURL}/user/newUser`,

        formData
      );

      console.log("User created:", response.data);

      onSave();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="addUserModal"
      tabIndex="-1"
      aria-labelledby="addUserModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addUserModalLabel">
              Add New User
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onSave}
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Firstname
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  lastname
                </label>

                <textarea
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="order" className="form-label">
                  Order
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="order"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Create User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
