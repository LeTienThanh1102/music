import { Link } from "react-router-dom";
import "./footer.scss";
function Footer() {
  const footers = [
    {
      dv: "Tổng đài hỗ trợ (Miễn phí gọi)",
    },
    {
      dv: "Gọi mua:",
      quanty: "1900 2397",
      time: "(7:30 - 22:00)",
    },
    {
      dv: "Kĩ thuật:",
      quanty: "1900 2345",
      time: "(7:30 - 22:00)",
    },
    {
      dv: "Khiếu nại:",
      quanty: "1900 6754",
      time: "(8:30 - 21:00)",
    },
    {
      dv: "Bảo hành:",
      quanty: "1900 9856",
      time: "(8:30 - 20:00)",
    },
  ];
  const imgs=[
    "https://yt3.ggpht.com/X-wzEDu00-_l0K64mZ2H6pR56uanZHcUX4Jsjy5_YAGRiXYfoy4rNmus5V5sZfDH8ZC7f9Z8prk=s900-c-k-c0x00ffffff-no-rj",
    "https://dulichmedia.dalat.vn//Images/VLG/superadminportal.vlg/Ti%E1%BB%87n%20%C3%ADch/ATM/636534372261911540_da.jpg",
    "https://i.ytimg.com/vi/BSgZJEH_ot0/maxresdefault.jpg",
    "https://www.aquacity.tv/media/27120156-logo-nova-em.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SMENTERTAINMENT_LOGO.jpg/800px-SMENTERTAINMENT_LOGO.jpg"
  ]
  return (
    <div className="footer">
      <div className="grid-col-3 tablet-12">
        <div className="footer-product">
          <div className="footer-my">
            <div className="footer-pro-name">Designer</div>
            <i className="fa-solid fa-angles-down footer-my-icon"></i>
          </div>
          <div className="footer-pro-list">
            <img src="" alt="" className="footer-img" />
            <div className="footer-pro-gt">
              <p className="footer-fb">
                FaceBook:
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100043923007623">
                  https://www.facebook.com/profile.php?id=100043923007623
                </a>
              </p>
              <p target="_blank" className="footer-email">
                Email:
                <a href=""> tienthanh110202@gmail.com</a>
              </p>
              <p className="footer-ig">
                Instagram:
                <a href="https://www.instagram.com/tienthanh_1102/" target="_blank">
                  https://www.instagram.com/tienthanh_1102/
                </a>
              </p>
              <p className="footer-address">Địa chỉ: Hà Đông, Hà Nội, Việt Nam</p>
              <p className="footer-scholl">
                University: Học viện Công Nghệ Bưu Chính Viễn Thông
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-col-7 tablet-12">
        <div className="footer-mater">
          <div className="footer-lhe">
            <ul className="footer-lhe-list">
              {footers.map((item, index) => (
                <li key={index} className="footer__list">
                  <a className="footer__dv">{item.dv}</a>
                  <span className="footer-quaty">{item.quanty}</span>
                  <span className="footer__time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-logo">
            <p className="footer-logo-heading">Nhà tài trợ music shop</p>
            <div className="footer-body">
                {
                    imgs.map((item,index)=>(
                        <img key={index}
                          className="footer-tai"
                          src={item}
                          alt=""
                        ></img>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
