import Navbar from "../components/public/Navbar";
import Map from "./map";

const mainpage = () => {
  return (
    <div className="max-w-screen flex-row sm:flex">
      <Navbar />
      <Map />
    </div>
  );
};

export default mainpage;
