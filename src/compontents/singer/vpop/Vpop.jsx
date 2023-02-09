import { faAngleRight, faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Vpop(props) {
  const singer = [
    {
      img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
      name: "Hòa Minzy",
      list: [
        {
          key: "1",
          name: {
            text: "Không thể cùng nhau suốt kiếp",
            img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
          },
          duration: "3:45",
          album: "10 Downing Street",
        },
        {
          key: "2",
          name: {
            text: "Rời bỏ",
            img: "https://i.ytimg.com/vi/zQwKxVCR1y8/maxresdefault.jpg",
          },
          duration: "4:59",
          album: "Rời bỏ",
        },
        {
          key: "3",
          name: {
            text: "Chấp nhận",
            img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
          },
          duration: "",
          album: "Rời bỏ",
        },
        {
          key: "4",
          name: {
            text: "Tìm một nửa cô đơn",
            img: "https://avatar-ex-swe.nixcdn.com/song/2018/05/06/5/1/b/4/1525613531952_640.jpg",
          },
          duration: "3:45",
          album: "Tìm một nửa cô đơn",
        },
        {
          key: "5",
          name: {
            text: "Nàng Tiên Cá",
            img: "https://i.scdn.co/image/ab67616d0000b2738cee0a45e4b69414e1d99e29",
          },
          duration: "3:15",
          album: "Nàng Tiên cá",
        },
      ],
      address: "Bắc Ninh",
    },
    {
      img: "https://static-images.vnncdn.net/files/publish/2022/5/27/hain7580-102.jpg",
      name: "Amee",
      list: [
        {
          key: "1",
          name: {
            text: "Hai mươi hai",
            img: "https://static-images.vnncdn.net/files/publish/2022/5/27/hain7580-102.jpg",
          },
          duration: "3:22",
          album: "Hai mươi hai",
        },
        {
          key: "2",
          name: {
            text: "Đen đá không đường",
            img: "https://i.ytimg.com/vi/ZwDxaM5VBJM/hqdefault.jpg",
          },
          duration: "3:39",
          album: "Đen đá không đường",
        },
        {
          key: "3",
          name: {
            text: "Anh nhà ở đâu thế",
            img: "https://media.sohuutritue.net.vn/files/huongmi/2019/04/09/loi-bai-hat-anh-nha-o-dau-the-1029.jpg",
          },
          duration: "4:20",
          album: "Anh nhà ở đâu thế",
        },
        {
          key: "4",
          name: {
            text: "Sao anh chưa về?",
            img: "https://i.ytimg.com/vi/RlBkvjVss-s/maxresdefault.jpg",
          },
          duration: "5:55",
          album: "Sao anh chưa về?",
        },
      ],
      address: "Hà Nội",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5ebec1bd421630bf3ad110c09fa",
      name: "Vũ",
      list: [
        {
          key: "1",
          name: {
            text: "Bước qua mùa cô đơn",
            img: "https://i.ytimg.com/vi/n6Pnzi6r9NU/maxresdefault.jpg",
          },
          duration: "4:25",
          album: "Bước qua mùa cô đơn",
        },
        {
          key: "2",
          name: {
            text: "Lạ lùng",
            img: "https://i.ytimg.com/vi/F5tS5m86bOI/maxresdefault.jpg",
          },
          duration: "3:43",
          album: "Lạ lùng",
        },
        {
          key: "3",
          name: {
            text: " Đông kiếm em",
            img: "https://avatar-ex-swe.nixcdn.com/song/2020/08/11/6/d/1/5/1597138738469_640.jpg",
          },
          duration: "6:00",
          album: " Đông kiếm em",
        },
        {
          key: "4",
          name: {
            text: "Bước qua nhau",
            img: "https://avatar-ex-swe.nixcdn.com/song/share/2021/11/19/b/e/5/0/1637317185220.jpg",
          },
          duration: "4:33",
          album: "Bước qua nhau",
        },
        {
          key: "1",
          name: {
            text: "Phút ban đầu",
            img: "https://avatar-ex-swe.nixcdn.com/song/share/2021/11/19/b/e/5/0/1637317185220.jpg",
          },
          duration: "3:56",
          album: "Phút ban đầu",
        },
      ],
      address: "Thành phố Hồ Chí Minh",
    },
    {
      img: "https://yt3.ggpht.com/ytc/AKedOLQ-pO1p4Djrp5KaiawzzlBYUrKWBA-ZKteptNztQw=s900-c-k-c0x00ffffff-no-rj",
      name: "Soobin Hoàng Sơn",
      list: [
        {
          key: "1",
          name: {
            text: "Nếu ngày ấy",
            img: "https://i.ytimg.com/vi/HK31DrqpztM/maxresdefault.jpg",
          },
          duration: "4:50",
          album: "Nếu ngày ấy",
        },
        {
          key: "2",
          name: {
            text: "Anh đã quen với cô đơn",
            img: "https://i.ytimg.com/vi/X7sSE3yCNLI/maxresdefault.jpg",
          },
          duration: "4:33",
          album: "Anh đã quen với cô đơn",
        },
        {
          key: "3",
          name: {
            text: "Xin đừng lặng im",
            img: "https://i.ytimg.com/vi/ZzwnKmGN3kQ/maxresdefault.jpg",
          },
          duration: "3:49",
          album: "Xin đừng lặng im",
        },
        {
          key: "4",
          name: {
            text: "Vài lần đón đưa",
            img: "https://i.ytimg.com/vi/f3QmvxbzutQ/hqdefault.jpg",
          },
          duration: "4:55",
          album: "Vài lần đón đưa",
        },
        {
          key: "5",
          name: {
            text: "The Playah",
            img: "https://i.ytimg.com/vi/d44UTUSTYKU/maxresdefault.jpg",
          },
          duration: "7:15",
          album: "The Playah",
        },
      ],
      address: "Quảng Bình",
    },
    {
      img: "https://yt3.ggpht.com/ytc/AKedOLQ-pO1p4Djrp5KaiawzzlBYUrKWBA-ZKteptNztQw=s900-c-k-c0x00ffffff-no-rj",
      name: "Soobin Hoàng Sơn",
      list: [
        {
          key: "1",
          name: {
            text: "Nếu ngày ấy",
            img: "https://i.ytimg.com/vi/HK31DrqpztM/maxresdefault.jpg",
          },
          duration: "4:50",
          album: "Nếu ngày ấy",
        },
        {
          key: "2",
          name: {
            text: "Anh đã quen với cô đơn",
            img: "https://i.ytimg.com/vi/X7sSE3yCNLI/maxresdefault.jpg",
          },
          duration: "4:33",
          album: "Anh đã quen với cô đơn",
        },
        {
          key: "3",
          name: {
            text: "Xin đừng lặng im",
            img: "https://i.ytimg.com/vi/ZzwnKmGN3kQ/maxresdefault.jpg",
          },
          duration: "3:49",
          album: "Xin đừng lặng im",
        },
        {
          key: "4",
          name: {
            text: "Vài lần đón đưa",
            img: "https://i.ytimg.com/vi/f3QmvxbzutQ/hqdefault.jpg",
          },
          duration: "4:55",
          album: "Vài lần đón đưa",
        },
        {
          key: "5",
          name: {
            text: "The Playah",
            img: "https://i.ytimg.com/vi/d44UTUSTYKU/maxresdefault.jpg",
          },
          duration: "7:15",
          album: "The Playah",
        },
      ],
      address: "Quảng Bình",
    },
  ];
  const handleOppen = (item) => {
    props.setLear(item);
    window.scrollTo(0,0);
  };
  return (
    <div className="singer-vpop">
      <div className="singer-vpop-heading">
        <div className="singer-lastday">
          <FontAwesomeIcon
            icon={faArrowsToDot}
            className="singer-lastday-icon"
          />
          <p className="singer-vpop-content">Ca Sĩ V-POP</p>
        </div>
        <a href="" className="singer-vpop-all">
          <p className="singer-vpop-tatca">Xem tất cả</p>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </a>
      </div>
      <div className="singer-vpop-list">
        {singer.map((item, index) => (
          <div key={index} className="grid-col-2-2 tablet-3 mobile-4">
            <Link to="/singer" className="singer-vpop-items">
              <div
                className="singer-vpop-item"
                onClick={() => handleOppen(item)}
              >
                <div className="singer-vpop-imgg">
                  <img src={item.img} alt="" className="singer-vpop-img" />
                </div>
                <span className="singer-vpop-name">{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vpop;
