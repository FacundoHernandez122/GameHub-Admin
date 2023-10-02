import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Current.css";

function Current() {
  const [gameCount, setGameCount] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseURL}/games`)
      .then((response) => {
        const numberOfGames = response.data.length;
        setGameCount(numberOfGames);
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de juegos:', error);
      });
  }, []);
  

  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/user`)
      .then((response) => {
        const numberOfUsers = response.data.length;
        setUserCount(numberOfUsers);
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de usuarios:', error);
      });
  }, []);

  const [orderCount, setOrderCount] = useState(null);

  useEffect(() => {
   
    axios.get('${baseURL}/orders')
      .then((response) => {
       
        const numberOfOrders = response.data.length;
       
        setOrderCount(numberOfOrders);
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de órdenes:', error);
      });
  }, []);
  

  return ( 
    <>
    <div className='container'>
      <div className='row'>
    <div className='current_box d-flex justify-content-center '>
    <div className='box1 '>
        <h3>Total Games</h3>
        <p className='fs-2'>{gameCount !== null ? `${gameCount} Games` : 'Cargando...'}</p>
        </div>
    <div className='box2 '>
        <h3>Users quantity</h3>
        <p>{userCount !== null ? `${userCount} Users` : 'Cargando...'}</p>
        </div>
    <div className='box3 '>
        <h3>Orders quantity</h3>
        <p>{orderCount !== null ? `${orderCount} Orders` : 'Cargando...'}</p>
        </div>
    <div className='box4 '>
        <h3>Chrun Rate</h3>
        <p>2%</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Current