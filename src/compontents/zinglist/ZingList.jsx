import { faAnglesRight,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./zinglist.scss";
function ZingList() {
    const event=[
        {
            name:"Lễ Hội Ánh Sáng",
            img:"http://sukienvietsky.com/upload/news/le-hoi-am-nhac-so-1-the-gioi-3-5441.jpg",
        },
        {
            name:"Lề hội Chờ IUUU CHILLL",
            img:"https://backstage.vn/wp-content/uploads/2020/06/dwp-2017-djakarta-warehouse-project-garudha-loop-central.jpg",
        },
        {
            name:"VinaMusic Show",
            img:"https://ibgroup.vn/wp-content/uploads/sites/8/2022/06/287401799_2285120138322044_4605964801406521977_n.jpg"
        }
    ]
  return (
    <div id="no6" className="zing-event">
      <div className="top-music-heading">
        <div className="top-music-open">
          <FontAwesomeIcon icon={faAnglesRight} className="music-new-icon" />
          <a href="" className="music-new-heading">
            #ZingEvent List
          </a>
        </div>
      </div>
      <div className="zing-event-body">
        <div className="zing-event-list">
            { event.map((item,index)=>(
                <div key={index} className="grid-col-l-4 tablet-12">
                    <a href="" className="zing-event-items">
                    <div className="zing-event-content">
                        <p className="zing-event-name">{item.name}</p>
                        <img
                        className="zing-event-img"
                        src={item.img}
                        alt=""
                        ></img>
                        <div className="zing-event-qt">
                        <button className="zing-event-buy">Buy Ticket</button>
                        <button className="zing-event-intro">Quan tâm</button>
                        </div>
                    </div>
                    </a>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  );
}

export default ZingList;
