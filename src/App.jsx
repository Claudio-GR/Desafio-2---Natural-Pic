import { Route, Routes } from "react-router-dom";
import Nav_bar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Not_found from "./components/NotFound";

const App = () => {
  return (
    <div>
        <Nav_bar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
          <Route 
            path="*" 
            element={<Not_found/>} />
        </Routes>
    </div>
  );
};
export default App;
