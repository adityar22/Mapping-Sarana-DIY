import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import { Login } from "./pages/login";
import Mainpage from "./pages/mainpage";

function App() {
  const { user } = useAuthContext();
  console.log(user)
  return (
    <>

      <div>
        <Router>
          <Routes>
            <Route exact path="/*" element={!user ? <Login /> : <Mainpage />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
