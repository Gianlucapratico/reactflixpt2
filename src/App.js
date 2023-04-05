import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Film1 from "./components/Film1";
import Film2 from "./components/Film2";
import Film3 from "./components/Film3";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";
import TvShows from "./components/TvShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="Container bg-dark">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route>
            <Route path="/Home" element={<Home />} />
          </Route>
          <Route>
            <Route path="/TvShows" element={<TvShows />} />
          </Route>
        </Routes>

        <Film1 />
        <Film2 />
        <Film3 />
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
