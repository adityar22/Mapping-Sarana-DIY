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
      <div className="max-w-screen flex-row sm:flex">
        <div className='sm:overflow-y-scroll relative w-screen'>
          <Router>
            <Routes>
              <Route path="/mapping" element={<Map />} exact />
              <Route path="/mainpage" element={<Mainpage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
