import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
