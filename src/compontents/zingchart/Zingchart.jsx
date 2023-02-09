import "./zingchart.scss";
function Zingchart() {
  return (
    <div id="no3" className="zingchart">
      <div className="zingchart-heading">
        <i className="fa-solid fa-angles-right music-new-icon"></i>
        <a href="" className="music-new-heading">
          #Zingchart
        </a>
      </div>
      <div className="zingchart-body">
        <ul className="zingchart-list">
          <li href="" className="zingchart-items">
            <a href="" className="zingchart-loving">
              <p className="zingchart-name">Top bài hát của tôi thích</p>
              <img
                src="http://media.doisongphapluat.com/684/2021/2/2/danh-tinh-nam-ca-si-vuot-mat-jack-dan-dau-bang-zingchart-sau-2-ngay-dspl-1.jpg"
                alt=""
                className="zingchart-img"
              />
            </a>
          </li>
          <li className="zingchart-items">
            <a href="" className="zingchart-loving">
              <p className="zingchart-name">Top thịnh hành </p>
              <img
                src="https://thegioidienanh.vn/stores/news_dataimages/donguyetanh/102019/19/01/3517_ZC_41_H1.jpg"
                alt=""
                className="zingchart-img"
              />
            </a>
          </li>
          <li className="zingchart-items">
            <a href="" className="zingchart-loving">
              <p className="zingchart-name">Top music hay nghe nhất</p>
              <img
                src="https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2020_08_20/LBB_1.JPG"
                alt=""
                className="zingchart-img"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Zingchart;
