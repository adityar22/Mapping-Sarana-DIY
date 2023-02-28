import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import LocationList from "./pages/LocationList";
import Map from "./pages/map";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import { Login } from "./pages/login";
import Mainpage from "./pages/mainpage";

function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            exact
            path="/*"
            element={!user ? <Login /> : <Mainpage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
