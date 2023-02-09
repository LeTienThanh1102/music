import { faAngleRight, faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Usuk(props) {
  const usuk = [
    {
      img: "https://nld.mediacdn.vn/k:2015/hay-lam-duoc-nhu-adele-1446538769166/adele-nhieu-lan-duoc-moi-chup-anh-khoa-than.jpg",
      name: "Adele",
      list: [
        {
          key: "1",
          name: {
            text: "Easy On Me",
            img: "https://i.ytimg.com/vi/X-yIEMduRXk/maxresdefault.jpg",
          },
          duration: 120,
          album: "Easy On Me",
        },
        {
          key: "2",
          name: {
            text: "Rolling in the Deep",
            img: "https://i.ytimg.com/vi/bDtjO-R0QSo/maxresdefault.jpg",
          },
          duration: 120,
          album: "Rolling in the Deep",
        },
        {
          key: "3",
          name: {
            text: "Someone Like You",
            img: "https://www.guitarchords247.com/wp-content/uploads/2018/06/Adele-Someone-Like-You.png",
          },
          duration: 120,
          album: "Someone Like You",
        },
        {
          key: "4",
          name: {
            text: "Hello",
            img: "https://i.ytimg.com/vi/be12BC5pQLE/hqdefault.jpg",
          },
          duration: 120,
          album: "Hello",
        },
        {
          key: "5",
          name: {
            text: "Send My Love",
            img: "https://i.ytimg.com/vi/fk4BbF7B29w/maxresdefault.jpg",
          },
          duration: 120,
          album: "Send My Love",
        },
        {
          key: "6",
          name: {
            text: "I Drink Wine",
            img: "https://media.pitchfork.com/photos/635960c6306199d38555afa2/2:1/w_2560%2Cc_limit/Adele.jpg",
          },
          duration: 120,
          album: "I Drink Wine",
        },
        {
          key: "7",
          name: {
            text: "To Be Loved",
            img: "https://i.ytimg.com/vi/6ORfYTsejdo/maxresdefault.jpg",
          },
          duration: 120,
          album: "To Be Loved",
        },
        {
          key: "8",
          name: {
            text: "Chasing Pavements",
            img: "https://3.bp.blogspot.com/-FojqxQeF7c8/VOghBUCk-qI/AAAAAAAAERE/-wXPLpjqLiE/s1600/chasingpavements.jpg",
          },
          duration: 120,
          album: "Chasing Pavements",
        },
        {
          key: "9",
          name: {
            text: "Kingdom",
            img: "https://ss-images.saostar.vn/w800/2020/03/18/7186741/bl1.jpg",
          },
          duration: 120,
          album: "King dom",
        },
      ],
    },
    {
      img: "https://static.onecms.io/wp-content/uploads/sites/6/2015/01/maroon-5-sugar.jpg",
      name: "Maroon-5",
      list: [
        {
          key: "1",
          name: {
            text: "Girls Like You",
            img: "https://theharmonica.vn/wp-content/uploads/2019/02/girlslikeyou.jpg",
          },
          duration: "4:54",
          album: "Girls Like You",
        },
        {
          key: "2",
          name: {
            text: "Payphone",
            img: "https://i.ytimg.com/vi/KRaWnd3LJfs/maxresdefault.jpg",
          },
          duration: "4:13",
          album: "Payphone",
        },
        {
          key: "3",
          name: {
            text: "Sugar",
            img: "https://i.ytimg.com/vi/N1BcpzPGlYQ/maxresdefault.jpg",
          },
          duration: "3:45",
          album: "Sugar",
        },
        {
          key: "4",
          name: {
            text: "Animals",
            img: "https://i.ytimg.com/vi/0GVExpdmoDs/maxresdefault.jpg",
          },
          duration: "5:12",
          album: "Animals",
        },
        {
          key: "5",
          name: {
            text: "Maps",
            img: "https://i.ytimg.com/vi/xj6fHiF8Osg/maxresdefault.jpg",
          },
          duration: "3:23",
          album: "Maps",
        },
        {
          key: "6",
          name: {
            text: "One More Night",
            img: "https://i.ytimg.com/vi/7CPYoGtI75Q/maxresdefault.jpg",
          },
          duration: "5:22",
          album: "One More Night",
        },
      ],
    },
    {
      img: "https://music-b26f.kxcdn.com/wp-content/uploads/2018/09/Imagine-Dragons_BLS_091518-8251-770x470.jpg",
      name: "Imagine Dragons",
      list: [
        {
          key: "1",
          name: {
            text: "Girls Like You",
            img: "https://theharmonica.vn/wp-content/uploads/2019/02/girlslikeyou.jpg",
          },
          duration: "6:12",
          album: "Girls Like You",
        },
        {
          key: "2",
          name: {
            text: "Payphone",
            img: "https://i.ytimg.com/vi/KRaWnd3LJfs/maxresdefault.jpg",
          },
          duration: "5:32",
          album: "Payphone",
        },
        {
          key: "3",
          name: {
            text: "Sugar",
            img: "https://i.ytimg.com/vi/N1BcpzPGlYQ/maxresdefault.jpg",
          },
          duration: "4:32",
          album: "Sugar",
        },
        {
          key: "4",
          name: {
            text: "Animals",
            img: "https://i.ytimg.com/vi/0GVExpdmoDs/maxresdefault.jpg",
          },
          duration: "5:11",
          album: "Animals",
        },
        {
          key: "5",
          name: {
            text: "Maps",
            img: "https://i.ytimg.com/vi/xj6fHiF8Osg/maxresdefault.jpg",
          },
          duration: "5:22",
          album: "Maps",
        },
        {
          key: "6",
          name: {
            text: "One More Night",
            img: "https://i.ytimg.com/vi/7CPYoGtI75Q/maxresdefault.jpg",
          },
          duration: "4:22",
          album: "One More Night",
        },
      ],
    },
    {
      img: "https://media.vogue.fr/photos/5e5e81e568322800087b9c81/3:4/w_1278,h_1704,c_limit/001-Lady-Gaga-Album-VogueGlobe-Mar2.jpg",
      name: "Lady gaga",
      list: [
        {
          key: "1",
          name: {
            text: "Always Remember Us This Way",
            img: "https://i.ytimg.com/vi/p1godKRBeZc/maxresdefault.jpg",
          },
          duration: "4:12",
          album: "Always Remember Us This Way",
        },
        {
          key: "2",
          name: {
            text: "Poker Face",
            img: "https://i.ytimg.com/vi/5JHMvtiWnRo/maxresdefault.jpg",
          },
          duration: "2:59",
          album: "Poker Face",
        },
        {
          key: "3",
          name: {
            text: "Shallow",
            img: "https://m.media-amazon.com/images/I/813540BVRYL._SS500_.jpg",
          },
          duration: "4:32",
          album: "Shallow",
        },
        {
          key: "4",
          name: {
            text: "Bad Romance",
            img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Lady_Gaga_-_Bad_Romance.png",
          },
          duration: "4:21",
          album: "Bad Romance",
        },
      ],
    },
    {
      img: "http://reviewnhaccu.com/wp-content/uploads/2021/03/justin-bieber.jpg",
      name: "Justin-Bieber",
      list: [
        {
          key: "1",
          name: {
            text: "STAY",
            img: "https://pic-bstarstatic.akamaized.net/ugc/b62b3e5a3e85d9da7cbc4b50f136f8f35aa3e920.jpg",
          },
          duration: "3:43",
          album: "STAY",
        },
        {
          key: "2",
          name: {
            text: "Love Yourself",
            img: "https://themeadowglade.com/wp-content/uploads/2020/09/rsz_love_yourself_-_header_-_meadowglade.jpg",
          },
          duration: "3:35",
          album: "Love Yourself",
        },
        {
          key: "3",
          name: {
            text: "Ghost",
            img: "https://i.ytimg.com/vi/u9DV1eHQpcA/maxresdefault.jpg",
          },
          duration: "5:56",
          album: "Ghost",
        },
        {
          key: "4",
          name: {
            text: "Peaches",
            img: "https://i.ytimg.com/vi/tQ0yjYUFKAE/maxresdefault.jpg",
          },
          duration: "7:12",
          album: "Peaches",
        },
        {
          key: "5",
          name: {
            text: "I Don’t Care",
            img: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/i%20dnt%20care%20(2).jpg",
          },
          duration: "4:14",
          album: "I Don’t Care",
        },
        {
          key: "6",
          name: {
            text: "Eenie Meenie",
            img: "https://i.ytimg.com/vi/prmmCg5bKxA/maxresdefault.jpg",
          },
          duration: "4:35",
          album: "Eenie Meenie",
        },
      ],
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
            className=" singer-lastday-icon"
          ></FontAwesomeIcon>
          <p className="singer-vpop-content">Ca Sĩ US-UK</p>
        </div>
        <a href="" className="singer-vpop-all">
          <p className="singer-vpop-tatca">Xem tất cả</p>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </a>
      </div>
      <div className="singer-vpop-list">
        {usuk.map((item, index) => (
          <div key={index} className="grid-col-2-2 tablet-3 mobile-4">
            <Link
              to="/singer"
              className="singer-vpop-items"
              onClick={() => handleOppen(item)}
            >
              <div className="singer-vpop-item">
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

export default Usuk;
