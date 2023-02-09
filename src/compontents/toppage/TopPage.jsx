import { useEffect } from "react";
import Header from "../header/Header";
import Aumy from "../nhac/aumy/Aumy";
import ChauA from "../nhac/chaua/ChauA";
import HanQuoc from "../nhac/hanquoc/HanQuoc";
import VietNam from "../nhac/vietnam/VietNam";
import Sidebar from "../sidebar/Sidebar";
import "./topPage.scss";
function TopPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="toppage">
      <div class="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div class="grid-col-10 m-6 c-12">
        <Header />
        <div className="toppage-body">
            <div className="topmusic">
            <p className="topmusic-heading">Nhạc Việt Nam</p>
            <VietNam />
            </div>
            <div className="toppage-chaua">
            <ChauA />
            </div>
            <div className="toppage-hanquoc">
              <HanQuoc />
            </div>
            <div className="toppage-aumy">
              <Aumy />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
