import {
  faCrown,
  faEllipsis,
  faHeart,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Footer from "~/compontents/footer/Footer";
import Header from "~/compontents/header/Header";
import PlaySong from "~/compontents/playsong/PlaySong";
import Sidebar from "~/compontents/sidebar/Sidebar";
import Singday from "~/compontents/singday/Singday";
import "./main.scss";
function Main({ days,setDay,setInfor, setPlay}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePlaying=(item)=>{
    setPlay(true);
    setInfor(item);
  }
  return (
    <div className="main">
      <div className="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div className="grid-col-10 m-6 c-12">
        <Header />
          <div className="main-day">
            <div className="grid-col-4-min">
              <div className="day-img" >
                <img src={days?.img} alt="" className="asinganh" />
                <div className="day-infor">
                  <p className="day-name">{days?.name}</p>
                  <div className="day-address">
                    <span>{days?.title}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col-8-min">
              <div className="day-list">
                {days?.day.map((item, index)=>(
                  <div className="day-pro" key={index} onClick={()=>handlePlaying(item)}>
                    <div className="day-items">
                      <div className="day-imggg">
                        <img
                          src={days?.img}
                          alt=""
                          className="day-anh"
                        />
                      </div>
                      <div className="day-title">
                        <div className="day-name">{item?.name}</div>
                        <div className="day-singer">{item?.singer}</div>
                      </div>
                      <div className="day-duration">{item?.duration}</div>
                      <div className="day-icons">
                        <FontAwesomeIcon className="day-icon" icon={faHeart} />
                        <FontAwesomeIcon className="day-icon" icon={faMusic} />
                        <FontAwesomeIcon className="day-icon" icon={faCrown} />
                        <FontAwesomeIcon className="day-icon" icon={faEllipsis} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          < Singday setDay={setDay}/>
          <Footer />
      </div>
    </div>
  );
}

export default Main;
