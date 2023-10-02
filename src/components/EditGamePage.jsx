import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EditGamePage.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

const EditGamePage = () => {
  const { gameId } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [newGameName, setNewGameName] = useState("");
  const [newGameDescription, setNewGameDescription] = useState("");
  const [newGamePrice, setNewGamePrice] = useState(0);
  const [newGameStock, setNewGameStock] = useState(0);

  useEffect(() => {
    // Fetch the game data based on gameId
    axios.get(`${baseURL}/admin/${gameId}`).then((response) => {
      const gameData = response.data;
      setGame(gameData);
      setNewGameName(gameData.name);
      setNewGameDescription(gameData.description);
      setNewGamePrice(gameData.price);
      setNewGameStock(gameData.stock);
      console.log("Game data received:", gameData);
    });
  }, [gameId]); // gameId should be the only dependency

  const handleSave = async () => {
    try {
      const updatedGameData = {
        name: newGameName,
        price: newGamePrice,
        stock: newGameStock,
      };

      console.log("Updated game data to send:", updatedGameData);

      axios.patch(`${baseURL}/admin/${gameId}`, updatedGameData);
    } catch (error) {
      console.error("Error updating game information:", error);
    }
  };

  if (game === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-center  ">
      <div className="col-lg-2 col-md-3 col-sm-4 side_back">
        <Sidebar />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-8 d-flex justify-content-center mt-5 ">
        <div className="edit_user ">
          <div className="title_edit ">
            <h2>Edit Game: {game.name}</h2>

            <div className="content_edit">
              <label>Game Name </label>

              <input
                className="input_name"
                type="text"
                value={newGameName}
                onChange={(e) => setNewGameName(e.target.value)}
              />
            </div>

            <div className="content_edit">
              <label>Price </label>

              <input
                className="input_price"
                type="number"
                value={newGamePrice}
                onChange={(e) => setNewGamePrice(e.target.value)}
              />
            </div>

            <div className="content_edit">
              <label>Stock </label>
              <input
                className="input_stock"
                type="number"
                value={newGameStock}
                onChange={(e) => setNewGameStock(e.target.value)}
              />
            </div>

            <div className="save_game">
              <Link to="/products">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-arrow-return-left bg-dark rounded-circle p-1 mt-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </Link>
              <button
                className="save_button_game"
                type="button"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGamePage;
