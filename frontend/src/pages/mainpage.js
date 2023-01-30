import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/public/Navbar";
import Map from "./map";
import SearchBar from "../components/searchbar/Searchbar";

const Mainpage = () => {
  return (
    <div className="max-w-screen flex-row sm:flex">
      <Navbar />
      <div className="sm:overflow-y-scroll relative w-screen">
        <Routes>

          <Route path='/' element={<Map />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;
