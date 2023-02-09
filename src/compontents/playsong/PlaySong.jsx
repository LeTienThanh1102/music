import { faAngleDown, faBackward, faCirclePlay, faClose, faForward, faHeart, faMusic, faPause, faRepeat, faShuffle, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./playsong.scss"
function PlaySong({play,infor,setPlay}) {
    const handleClose=()=>{
        setPlay(false)
    }
    const [pause, setpause]=useState(false);
    return ( 
        <div className={`playsong ${play && "active"}`}>
            <div className="playsong-container">
                <div className="playsong-title">
                    <div className="playsong-img">
                        <img src={infor?.img} alt="" className="playsong-anh" />
                        <div className="playsong-name">
                            <div className="playsong-item">
                                <p className="sing-nameee">{infor?.name}</p>
                                <div className="sing-singer">{infor?.singer}</div>
                            </div>
                            <div className="playsong-tym">
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="playsong-phat">
                    <div className="playsong-icon">
                        <FontAwesomeIcon className="playsong-nut playsong-nut-kieu" icon={faShuffle} />
                        <FontAwesomeIcon className="playsong-nut" icon={faBackward} />
                        {pause ?
                            (<FontAwesomeIcon className="playsong-nut playsong-nut-play" icon={faPause} onClick={()=>setpause(false)} />):
                            (<FontAwesomeIcon className="playsong-nut playsong-nut-play" icon={faCirclePlay} onClick={()=>setpause(true)} />)
                        }
                        <FontAwesomeIcon className="playsong-nut" icon={faForward} />
                        <FontAwesomeIcon className="playsong-nut" icon={faRepeat} />
                    </div>
                </div>
                <div className="playsong-footer">
                    <FontAwesomeIcon className="playsong-nut" icon={faVolumeXmark} />
                    <FontAwesomeIcon className="playsong-nut" icon={faVolumeHigh} />
                    <FontAwesomeIcon className="playsong-nut" icon={faMusic} />
                </div>
            </div>
            <div className="play-close" onClick={()=>handleClose()}>
                <FontAwesomeIcon icon={faClose} />
            </div>
        </div>
     );
}

export default PlaySong;