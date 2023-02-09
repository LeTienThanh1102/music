import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faClockRotateLeft,faHeart,faAlignRight,faAlignLeft, faGear, faListCheck, faCircleQuestion, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import { faAirbnb,faAngular, faAutoprefixer } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const tabs = [
    {
      name: "Cá Nhân",
      icon: faUser,
      to:"/uer"
    },
    {
      name: "Trang chủ",
      icon: faAngular,
      to:"/"
    },
    {
      name: "Yêu Thích",
      icon: faHeart,
      to:"/love"
    },
    {
      name: "Kênh đăng kí",
      icon: faAutoprefixer,
      to:"/subscribe"
    },
    {
      name: "Top thịnh hành",
      icon: faAlignLeft,
      to:"/toptrending"
    },
    {
      name: "Khám Phá",
      icon: faClockRotateLeft,
      to:"/view"
    },
   
    {
      name: "Xem Sau",
      icon: faAirbnb,
      to:"/xemsau"
    },
    
    {
      name: "Theo Dõi",
      icon: faAngular,
      to:"/follow"
    },
  ];
  const footer = [
    {
      name: "Cài Đặt",
      icon: faGear,
    },
    {
      name: "Lịch sử tìm kiếm",
      icon: faListCheck,
    },
    {
      name: "Trợ giúp",
      icon: faCircleQuestion,
    },
    {
      name: "Phản hồi",
      icon: faHandshakeAngle
    },
  ];
  return (
    <div className="side-bar">
      <div className="side-bar-logo">
        <img className="side-bar-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/ZingMP3logo.svg/2560px-ZingMP3logo.svg.png" alt="" />
      </div>

      <div className="side-bar-body">
        {tabs.map((item, index) => (
          <div key={index} className="side-bar-items">
            <Link to={item.to} className="side-bar-a">
              <FontAwesomeIcon
                icon={item.icon}
                className="side-bav-dv-icon side-bar-icon"
              />
              <span className="side-bar-name">{item.name}</span>
              
            </Link>
          </div>
        ))}
      </div>
      <div className="side-bar-footer">
        <div className="side-bar-list">
          {footer.map((item, index) => (
            <div key={index} className="side-bar-dv">
              <FontAwesomeIcon
                icon={item.icon}
                className="side-bav-dv-icon "
              />
              <span className="side-bar-dv-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
