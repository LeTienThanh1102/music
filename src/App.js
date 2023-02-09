import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Asinger from "./compontents/asinger/Asinger";
import Main from "./compontents/day/main/Main";
import Layout from './compontents/layout/Layout';
import Login from "./compontents/login/Login";
import LoveSong from "./compontents/lovesong/LoveSong";
import PlaySong from "./compontents/playsong/PlaySong";
import Profile from "./compontents/profile/Profile";
import Subsrice from "./compontents/subscrice/Subsrice";
import TopPage from "./compontents/toppage/TopPage";
import Trendding from "./compontents/trendding/Trendding";

function App() {
  const [lear, setLear]=useState();
  const [days, setDay]=useState();
  const [play, setPlay]=useState(false);
  const [infor,setInfor]=useState();
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout setLear={setLear} setDay={setDay} setInfor={setInfor} setPlay={setPlay} infor={infor} play={play}/>} />
          <Route path="/singer" element={<Asinger lear={lear} setLear={setLear} />} />
          <Route path="/top" element={<TopPage />} />
          <Route path="/day" element={<Main days={days} setDay={setDay} setInfor={setInfor} setPlay={setPlay} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/uer" element={<Profile />} />
          <Route path="/love" element={<LoveSong />} />
          <Route path="/toptrending" element={<Trendding />} />
          <Route path="/subscribe" element={<Subsrice />} />
      </Routes>
      <PlaySong infor={infor} play={play} setPlay={setPlay} />
    </BrowserRouter>
  );
}

export default App;
