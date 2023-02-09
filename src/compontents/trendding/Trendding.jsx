import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './trendding.scss';
function Trendding() {
  const slider=["Mới nhất","Âm nhạc","Trò chơi","Ca sĩ","Nhạc Phim"];
  const tredding=[
    {
      sott:1,
      img:"https://static-images.vnncdn.net/files/publish/2022/10/28/world-cup-2022-47.jpg",
      name:"Highlights | QATAR vs ECUADOR | Chủ nhà nếm trải đẳng cấp World Cup",
      singer:"EXO - World Cup 2022 - Bai hat cua nam",
      view: "10.32Tr",
      title:"Dù đã rất nỗ lực nhưng đội chủ nhà Qatar vẫn hoàn toàn lép vế trước đối thủ Ecuador không quá tên tuổi. Việc bại trận 0-2 ở trận đấu ra quân...",
    },
    {
      sott:2,
      img:"https://kenh14cdn.com/203336854389633024/2022/11/8/photo-5-16678728519811975719486.jpeg",
      name:"The Masked Singer Vietnam - Ca Sĩ Mặt Nạ - Đêm Công Bố & Trao Giải: Ai sẽ là quán quân?",
      singer:"Vie-Channel-HTV2 ",
      view: "9.8Tr",
      title:"The Masked Singer Vietnam - Ca Sĩ Mặt Nạ - Đêm Công Bố & Trao Giải: Ai sẽ là quán quân? #TheMaskedSingerVietNam #CaSĩMặtNạ #VieChannelHTV2 #VieGIẢITRÍ #VieON #TrấnThàn...",
    },
    {
      sott:3,
      img:"https://i.ytimg.com/vi/PTbFN6bRBh4/maxresdefault.jpg",
      name:"7 Nụ Cười Xuân 6 | Tập 1: Tiến Luật quấn khăn tắm 'gợi cảm', hóa 'thầy hột gà' trị bệnh Thúy Ngân",
      singer:"DONG TAY PROMOTION OFFICIAL",
      view: "7.2Tr",
      title:"7 Nụ Cười Xuân 6 | Tập 1: Tiến Luật quấn khăn tắm 'gợi cảm', hóa 'thầy hột gà' trị bệnh Thúy Ngân '7 Nụ Cười Xuân' (7 NU CUOI XUAN) phát sóng vào...",
    },
    {
      sott:4,
      img:"https://i.ytimg.com/vi/ljg4SVIvhRg/maxresdefault.jpg",
      name:"TẤT CẢ ĐỨNG IM - Ngô Kiến Huy ft HIEUTHUHAI x Đinh Hà Uyên Thư x TDK l OFFICIAL MV",
      singer:"Ngô Kiến Huy",
      view: "5,7Tr",
      title:"TẤT CẢ ĐỨNG IM | NGÔ KIẾN HUY ft HIEUTHUHAI x Đinh Hà Uyên Thư x TDK | OFFICIAL MV Nội dung mv mượn câu chuyện của thám tử, trinh thám để điều tra sự vụng...",
    },
    {
      sott:5,
      img:"https://photo-playlist-zmp3.zmdcdn.me/v2/background-playlist?src=HavtoclCgWuG7IRpA9-e5nYLl1WlNbPjtzkV_weINIQTaj6ivXeGQjg3aUwiMX0_seYHkx421ZBQsykxuLHIRuYEphlWK0CwYuoUlhTI03xVsvsWx41KCfc9a_6F354uZ8wHx_TVMJx2nvAYkLXLPepMsUptSn2Q7da5jowovM-nwMkUXchb1epe9T6vPg93VG&cv=1&size=thumb/240_240",
      name:"NGƯỜI NHƯ ANH | MAI TIẾN DŨNG | OFFICIAL MV",
      singer:"Mai Tiến Dũng",
      view: "4.6Tr",
      title:"Sáng tác: Hùng Quân Stream on: https://yym.lnk.to/NguoiNhuAnh Đây là Kênh Chính Thức của Mai Tiến Dũng các bạn cùng theo dõi nhé : http://metub.net/maitiendung Follow:...",
    },
    {
      sott:6,
      img:"https://media.molistar.com/original/2022/11/06/636764c9e41ac_1.jpg",
      name:"Ừ! EM XIN LỖI - HOÀNG YẾN CHIBI X B RAY X KHẮC HƯNG | OFFICIAL MUSIC VIDEO",
      singer:"Hoàng Yến Chibi Official",
      view: "4,2Tr",
      title:"HOÀNG YẾN CHIBI - 'Ừ! EM XIN LỖI' ft. BRAY, KHẮC HƯNG #UEmXinLoi #hoangyenchibi #UEXL #bray #khachung Executive Producers: Nguyễn Hoàng Yến, Trinh Tran, Nguyễn Minh Đạt...",
    },
    {
      sott:7,
      img:"https://i.ytimg.com/vi/1v2YWTZb1Js/maxresdefault.jpg",
      name:"OFFICIAL MV | KỲ VỌNG SAI LẦM | NGUYỄN ĐÌNH VŨ x TĂNG PHÚC x YUNO BIGBOI",
      singer:"Nguyễn Đình Vũ Official",
      view: "3Tr",
      title:"Bài hát : Kỳ Vọng Sai Lầm | Nguyễn Đình Vũ x Tăng Phúc x Yuno Bigboi Sáng tác : Nguyễn Đình Vũ Các bạn nhớ ấn đăng ký kênh Vũ nha, quan trọng lắm đó...",
    },
  ]
  const handleMore=()=>{
    alert("Đợi nhập thêm dữ liệu !!!!")
  }
  return (
    <div className="trendding">
      <div class="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div class="grid-col-10 m-6 c-12">
        <Header />
        <div className="tredding-main">
          <div className="tredding-logo">
            <img src="https://i.pinimg.com/236x/a1/45/bc/a145bca8abb5ddfff07cbb2b55d9f1af.jpg" alt="" className="tredding-logo-img" />
            <div className="tredding-logo-name">Thịnh hành</div>
          </div>
          <div className="trendding-slider">
            <div className="trendding-slider-list">
              {slider.map((item,index)=>(
                <div className="trendding-slider-item">
                    {item}
                </div>
              ))
              }
            </div>
          </div>
          <div className="trendding-body">
            <div className="trendding-body-list">
              {tredding.map((item,index)=>(
                <div className="trendding-body-item">
                  <div className="trendding-body-sol">{item.sott}</div>
                  <img src={item.img} alt="" className="trendding-body-img" />
                  <div className="trendding-body-mota">
                    <p className="trendding-body-name">{item.name}</p>
                    <span className="trendding-body-view">{item.view}</span>
                    <div className="trendding-body-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tredding-more" onClick={()=>handleMore()}>
              <div className="tredding-more-name">
                Xem Thêm
                <FontAwesomeIcon icon={faAngleDown} className="tredding-more-icon"  />

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Trendding;
