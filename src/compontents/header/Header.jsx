import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
  const headers = [
    {
      name:"Nhạc Âu Mỹ",
      to:"/aumy"
    },
    {
      name:"K-POP",
      to:"/kpop"
    },
    {
      name:"Nhạc Trẻ",
      to:"/nhactre"
    },
    {
      name:"V-POP",
      to:"/vpop"
    },
    {
      name: "Nhạc Phim",
      to:"/film"
    }
   
  ];
  return (
    <div className="header">
      <div className="header-navbar">
        <div className="header-nav-input">
          <input
            type="text"
            placeholder="Tìm kiếm bài hát"
            className="header-search"
          />
          <FontAwesomeIcon
            className="header-search-icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
        <ul className="header-nav-list">
          {headers.map((item, index) => (
            <li key={index} className="header-nav-items">
              <Link to={item.to} className="header-nav-name">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/login" className="header-user">
          <img src="" alt="" className="header-user-img"></img>
        </Link>
      </div>
    </div>
   
  );
}

export default Header;
