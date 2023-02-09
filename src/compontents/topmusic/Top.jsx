import { faAnglesRight,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import VietNam from "../nhac/vietnam/VietNam";
import "./topmusic.scss";
function Top() {
  
  return (
    <div id="no5" className="top-music">
      <div className="top-music-heading">
        <div className="top-music-open">
          <FontAwesomeIcon icon={faAnglesRight} className="music-new-icon" />
          <a href="" className="music-new-heading">
            Top100 bài hát
          </a>
        </div>
        <Link to="/top" className="singer-vpop-all">
          <p className="singer-vpop-tatca">Xem tất cả</p>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </Link>
      </div>
      <VietNam />
    </div>
  );
}

export default Top;
