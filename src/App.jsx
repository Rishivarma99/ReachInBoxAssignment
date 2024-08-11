// contains both logic and oneboxpage with condition

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Oneboxpage from "./Oneboxpage";
import LocalContext from "./store/Store";
import TokenHandler from "./components/TokenHandler";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/auth" element={<TokenHandler />} />
          <Route path="/onebox" element={<Oneboxpage></Oneboxpage>} />
        </Routes>

        {/* <Oneboxpage></Oneboxpage>  */}
      </Router>
    </>
  );
}

export default App;
