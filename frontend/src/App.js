import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import { Login } from "./pages/login";
import Mainpage from "./pages/mainpage";
import Map from "./pages/map";

function App() {
  return (
    <>
      
        <Router>
          <Routes>
            <Route path="/pages/map" element={<Map />} exact />
            <Route path="/mainpage" element={<Mainpage />} />
            <Route path="/" element={<Map />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
