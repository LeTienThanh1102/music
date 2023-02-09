import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import New from "../newsong/New";
import PlaySong from "../playsong/PlaySong";
import Sidebar from "../sidebar/Sidebar";
import Singday from "../singday/Singday";
import Singer from "../singer/Singer";
import Slider from "../slider/Slider";
import Top from "../topmusic/Top";
import Zingchart from "../zingchart/Zingchart";
import ZingList from "../zinglist/ZingList";
import "./layout.scss";
function Layout({setLear, setDay,setPlay, setInfor, play,infor}) {
    // const [play, setPlay]=useState(false);
    // const [infor,setInfor]=useState();
    return ( 
        <div className="layout">
            <div className="grid-col-2 m-4 first">
                <Sidebar />
            </div>
            <div className="grid-col-10 m-6 c-12">
                <Header />
                <div className="body">
                    <div className="app-pro">
                        <Slider />
                        <New setInfor={setInfor} setPlay={setPlay} />
                        <Singday setDay={setDay}  />
                        <Singer setLear={setLear} setInfor={setInfor} setPlay={setPlay} />
                        <Top />
                        <Zingchart />
                        <ZingList />
                    </div>
                </div>
                <Footer />
                <PlaySong infor={infor} play={play} setPlay={setPlay} />
            </div>
        </div>
     );
}

export default Layout;