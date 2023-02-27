import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/public/Navbar";
import Map from "./map";
import SearchBar from "../components/searchbar/searchbar";
import LocationList from "./LocationList";

const Mainpage = () => {
  return (
    <div className="max-w-screen flex-row sm:flex">
      <Navbar />
      <div className="sm:overflow-y-scroll w-full relative">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/LocationList" element={<LocationList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;
