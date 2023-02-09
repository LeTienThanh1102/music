import {
  faArrowAltCircleDown,
  faPenClip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./profile.scss";
function Profile() {
  const menu = [
    "Bài viết",
    "Kênh đã đăng kí",
    "Ảnh",
    "Video",
    "Check in",
    "Xem thêm",
  ];
  return (
    <div className="profile">
      <div class="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div class="grid-col-10 m-6 c-12">
        <Header />
        <div className="profile-main">
          <div className="profile-header">
            <div className="profile-header-avatar">
              <img
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/311430711_652289602911801_8183253762556378944_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KG2fqgPlersAX_9JFf2&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDajTe283AUrt-2VubiqfVVmSzwsIrvZcwH7gF7LWEZKQ&oe=6382C95D"
                alt=""
                className="profile-header-img"
              />
            </div>
            <div className="profilel-heading">
              <div className="profilel-heading-no1">
                <div className="profile-header-info">
                  <h2 className="profile-header-name">Tiến Thành</h2>
                  <span className="profile-header-sol">Đă đăng kí: </span>
                  <span>1102 kênh</span>
                  <p className="profile-header-thanhvien">Thành Viên: Vàng</p>
                </div>
                <div className="profile-header-them">
                  Thêm video vào trang cá nhân
                </div>
                <div className="profile-header-edit">
                  <FontAwesomeIcon
                    icon={faPenClip}
                    style={{ padding: "4px 0" }}
                  />
                  <p className="profile-header-edit-name">
                    Chỉnh sửa trang cá nhân
                  </p>
                </div>
              </div>
              <div className="profilel-heading-no2">
                <div className="profile-heading-list">
                  {menu.map((item, index) => (
                    <div key={index} className="profile-heading-item">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="profile-heading-mama">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className="profile-heading-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <p className="profile-table">Chưa có bài hát nào cả</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
