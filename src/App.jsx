import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Video from "./pages/Video/Video";
import Search from "./pages/Search/Search";

const App = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="flex flex-col h-screen">

      {/* Navbar stays fixed at top */}
      <Navbar setMenu={setMenu} />

      {/* Main layout below navbar */}

        <Routes>
          <Route path="/" element={<Home menu={menu} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} /> || <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:query" element={<Search menu = {menu}/>} />
        </Routes>

    </div>
  );
};

export default App;