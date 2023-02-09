import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./new.scss";
function New(props) {
    const songs=[
        {
            img:"https://i.scdn.co/image/ab67616d0000b2737ea0d3614e0e4d0213451798",
            name:"Gieo quẻ",
            singer:"Hoàng Thùy Linh"
        },
        {
            img:"https://i.ytimg.com/vi/t0WFOnwp3MM/maxresdefault.jpg",
            name:"Mặt trời của em",
            singer:"Phương Ly"
        },
        {
            img:"https://avatar-ex-swe.nixcdn.com/song/share/2022/08/17/e/a/a/5/1660733423986.jpg",
            name:"Waiting for you",
            singer:"MONO"
        },
        {
            img:"https://i.ytimg.com/vi/ddaEtFOsFeM/maxresdefault.jpg",
            name:"Bài này chill phết",
            singer:"Đen Vâu"
        },
        {
            img:"https://i.ytimg.com/vi/n2iFnPaAsnU/maxresdefault.jpg",
            name:"Hai mươi hai",
            singer:"Amee"
        },
        {
            img:"https://i.ytimg.com/vi/DcCISK3sCYg/maxresdefault.jpg",
            name:"Có em",
            singer:"Madihu"
        },
        {
            img:"https://i.ytimg.com/vi/DrY_K0mT-As/maxresdefault.jpg",
            name:"Lạc Trôi",
            singer:"Sơn Tùng MTP"
        },
        {
            img:"https://i.ytimg.com/vi/aGUQsb31TEw/maxresdefault.jpg",
            name:"Mượn rượu tỏ tình",
            singer:"BigDaddy if Amily"
        },
        {
            img:"https://i.ytimg.com/vi/qtGXxc6enhc/maxresdefault.jpg",
            name:"Vỡ tan",
            singer:"Trịnh Thăng Bình"
        },
        {
            img:"https://i.ytimg.com/vi/CFkOaGVTX_M/hq720.jpg",
            name:"Lười yêu",
            singer:"Bảo Anh"
        },
        {
            img:"https://i.ytimg.com/vi/l0yKQLaNk5g/maxresdefault.jpg",
            name:"Một ngàn nỗi đau",
            singer:"Văn Mai Hương"
        },
        {
            img:"https://i.ytimg.com/vi/KgOtLOUdCMQ/maxresdefault.jpg",
            name:"Khác Biệt To lớn",
            singer:"Trịnh Thăng Bình"
        },
        {
            img:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
            name:"Người như Anh",
            singer:"Mai Tiến Dũng"
        },
        {
            img:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
            name:"Người như Anh",
            singer:"Mai Tiến Dũng"
        },
        {
            img:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
            name:"Người như Anh",
            singer:"Mai Tiến Dũng"
        },

    ]
    const handleOpen=(item)=> {
        props.setPlay(true);
        props.setInfor(item);
    }
  return (
    <div id="no1" className="music-new">
      <div className="music-new-headingg">
        <FontAwesomeIcon icon={faAngleRight} className="music-new-icon"/>
        <a href="" className="music-new-heading">
          Bài hát mới phát hành
        </a>
      </div>
      <div className="music-new-danhmuc">
        <span className="music-sing active">Bài hát</span>
        <span className="music-sing">ALBUM</span>
      </div>
      <div className="new-sing">
        <div className="row wide1">
          <div className="the-song active">
            {
                songs.map((item,index)=>(
                    <div key={index} className="grid-col-2-4 tablet-6 mobile-12">
                    <div className="sing-list" onClick={()=>handleOpen(item)}>
                        <div className="sing-item">
                        <img src={item.img} alt="" className="sing-img" />
                        <div className="sing-item-id">
                            <div className="sing-name">{item.name}</div>
                            <div className="sing-singer">{item.singer}</div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
