import { Route, Routes } from "react-router-dom";

import Navbar from "../components/public/Navbar";
import Map from "./map";
import LocationList from "./LocationList";
import SearchBar from "../components/searchbar/searchbar";

const Mainpage = () => {
  return (
    <div className="max-w-screen flex-row sm:flex max-h-screen">
      <Navbar />
      <div className="sm:overflow-y-scroll w-screen relative">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/LocationList" element={<LocationList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;
