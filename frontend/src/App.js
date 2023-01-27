import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/public/Navbar";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import { Login } from "./pages/login";
import Mainpage from "./pages/mainpage";
import Map from "./pages/map";

function App() {
  return (
    <>
      <div className="max-w-screen flex-row sm:flex">
        {/* <Navbar/> */}
        <div className='sm:overflow-y-scroll relative w-screen'>
          <Router>
            <Routes>
              <Route path="/mapping" element={<Map />} exact />
              <Route path="/mainpage" element={<Mainpage />} />
              <Route path="/" element={<Map />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
