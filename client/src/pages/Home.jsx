/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/NavBar';
import { Categories } from '../components/Products/Categories';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
export const Home = () => {
  const [ categories, setCategories ] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const { user } = useContext(AuthContext);
  const fetchCategories = async() => {
    try{
      const categoriesData = await axios.get('categories',{
        headers:{
          token: `Bearer ${userData.accessToken}` 
        }
      });
      setCategories(categoriesData.data);
    }
    catch(error){
      console.error('Error', error);
    }
  }

  useEffect(()=>{
    fetchCategories();
  },[]);

  return (
    <div className='App'>
        <Navbar title="Home"/>
      <h1>Shopping List</h1>
      <p>Welcome to our shop</p>
      {user ? <Categories categoriesData={categories}/> : null}
    </div>
    )
}
