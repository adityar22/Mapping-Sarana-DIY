import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import jwt_decoded from 'jwt-decode'

import Navbar from "../components/public/Navbar";
import Map from "./map";
import SearchBar from "../components/searchbar/searchbar";
import LocationList from "./LocationList";

const Mainpage = () => {
  // const [name, setName] = useState('');
  // const [token, setToken] = useState('');

  // useEffect(() => {
  //   refreshToken();
  // }, [])

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/account/token')
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decoded(response.data.accessToken)
  //   } catch (error) {

  //   }
  // }


  return (
    <div className="max-w-screen flex-row sm:flex h-screen">
      <Navbar />
      <div className="sm:overflow-y-scroll relative w-full">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/LocationList" element={<LocationList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;
