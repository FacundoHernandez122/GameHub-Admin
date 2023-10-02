import React, { useState } from "react";

import axios from "axios";

function AddGameModal({ onSave }) {
  const [formData, setFormData] = useState({
    name: "",

    description: "",

    price: 0,

    offer: 0,

    img: "",

    stock: 0,

    trending: false,

    category: "",

    img2: "",

    video: "",

    metacritic: 0,

    age: 0,
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
        `${baseURL}/admin/newGame`,

        formData
      );

      console.log("Game created:", response.data);

      onSave();
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="addGameModal"
      tabIndex="-1"
      aria-labelledby="addGameModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addGameModalLabel">
              Add New Game
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
                  Name
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
                <label htmlFor="description" className="form-label">
                  Description
                </label>

                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="offer" className="form-label">
                  Offer
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="offer"
                  name="offer"
                  value={formData.offer}
                  onChange={handleChange}
                />
              </div>

              {/*               <div className="mb-3">

                <label htmlFor="img" className="form-label">

                  Image URL

                </label>

                <input

                  type="text"

                  className="form-control"

                  id="img"

                  name="img"

                  value={formData.img}

                  onChange={handleChange}

                  required

                />

              </div> */}

              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*               <div className="mb-3">

                <label htmlFor="trending" className="form-label">

                  Trending

                </label>

                <select

                  className="form-control"

                  id="trending"

                  name="trending"

                  value={formData.trending}

                  onChange={handleChange}

                >

                  <option value={true}>true</option>

                  <option value={false}>false</option>

                </select>

              </div> */}

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>

              {/*               <div className="mb-3">

                <label htmlFor="img2" className="form-label">

                  Second Image URL

                </label>

                <input

                  type="text"

                  className="form-control"

                  id="img2"

                  name="img2"

                  value={formData.img2}

                  onChange={handleChange}

                />

              </div> */}

              {/*               <div className="mb-3">

                <label htmlFor="video" className="form-label">

                  Video URL

                </label>

                <input

                  type="text"

                  className="form-control"

                  id="video"

                  name="video"

                  value={formData.video}

                  onChange={handleChange}

                />

              </div> */}

              <div className="mb-3">
                <label htmlFor="metacritic" className="form-label">
                  Metacritic Score
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="metacritic"
                  name="metacritic"
                  value={formData.metacritic}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age Rating
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Create Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGameModal;
