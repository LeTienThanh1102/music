import { faAngleRight, faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Kpop(props) {
    const kpop = [
        {
          img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/17/1069278/Lisa-Blackpink-Nhiem.jpeg",
          name: "Lisa-BlackPink",
          list: [
            {
              key: "1",
              name: {
                text: "Lalisa",
                img: "http://icdn.dantri.com.vn/zoom/1200_630/2022/09/24/blackpink-crop-1664031736847.jpeg",
              },
              duration: "3:40",
              album: "Lalisa",
            },
            {
              key: "2",
              name: {
                text: "Blink Venom",
                img: "https://kenh14cdn.com/203336854389633024/2022/9/22/photo-8-16638206398921633207664.jpg",
              },
              duration: "5:35",
              album: "Born Pink",
            },
            {
              key: "3",
              name: {
                text: "Shut Down",
                img: "https://media.maybe.vn/attachments/fadk6fsaiaah56o-jpeg.45729/",
              },
              duration: "3:50",
              album: "Born Pink",
            },
            {
              key: "4",
              name: {
                text: "Typa Gird",
                img: "https://media.vov.vn/sites/default/files/styles/large/public/2022-04/1650936236-1638074491-un-blackpink-photograph-1.jpeg",
              },
              duration: "4:40",
              album: "Born Pink",
            },
            {
              key: "5",
              name: {
                text: "Hard to Love",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5hmJF_LP-E1WJeT1nDu6oSnXqeTIxDYEU_fePcteKLYuZQm5YJt3NTMXmaMBFU9HKvI&usqp=CAU",
              },
              duration: "4:45",
              album: "10 Downing Street",
            },
            {
              key: "6",
              name: {
                text: "Tally",
                img: "https://2sao.vietnamnetjsc.vn/images/2022/05/25/20/50/blackpink-1.jpg",
              },
              duration: "5:10",
              album: "Born Pink",
            },
            {
              key: "7",
              name: {
                text: "The Happiest Gird",
                img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/9/5/1089366/220902-YG-Naver-Post.jpeg",
              },
              duration: "4:44",
              album: "Born Pink",
            },
          ],
          address: "Korean",
        },
        {
          img: "https://cdnmedia.thethaovanhoa.vn/Upload/QDN4HPIpMrJuoPNyIvLDA/files/2022/07/Idols-treasure%20-faces6.jpg",
          name: "V-BTS",
          list: [
            {
              key: "1",
              name: {
                text: "Dynamite",
                img: "https://image.thanhnien.vn/w1024/Uploaded/2022/mtfqu/2021_12_01/bts-dynamite-689.jpg",
              },
              duration: "4:15",
              album: "BTS",
            },
            {
              key: "2",
              name: {
                text: "Butter",
                img: "https://cdnmedia.baotintuc.vn/Upload/YZmStSDTjb0M07hFJ2gA/files/2021/06/22/butter-220621(1).jpg",
              },
              duration: "3:36",
              album: "BTS",
            },
            {
              key: "3",
              name: {
                text: "Run BTS",
                img: "https://i.ytimg.com/vi/ssD6mzewGVo/maxresdefault.jpg",
              },
              duration: "5:34",
              album: "BTS",
            },
            {
              key: "4",
              name: {
                text: "Boy With Luv",
                img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bts-halsey-1555452116.jpg",
              },
              duration: "4:12",
              album: "BTS",
            },
          ],
        },
        {
          img: "https://toplist.vn/images/800px/wendy-611471.jpg",
          name: "YoSyymy",
          list: [
            {
              key: "1",
              name: {
                text: "BANG BANG BANG",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "BANG BANG BANG",
            },
            {
              key: "2",
              name: {
                text: "Haru Haru",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "Haru Haru",
            },
            {
              key: "3",
              name: {
                text: "Let's Not Fall In Love",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "Let's Not Fall In Love",
            },
            {
              key: "4",
              name: {
                text: "BLUE",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "BLUE",
            },
            {
              key: "5",
              name: {
                text: "LAST DANCE",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "LAST DANCE",
            },
            {
              key: "6",
              name: {
                text: "Bad Boy",
                img: "https://image.vtc.vn/resize/th/upload/2022/02/18/hoa-minzy-giau-co-nao-o-tuoi-26-17-17585215.jpg",
              },
              duration: 120,
              album: "Bad Boy",
            },
          ],
          address: "Korean",
        },
        {
          img: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/5/26/y71pkjnbdw761-1653539545908807007433.jpeg",
          name: "Jenny",
          list: [
            {
              key: "1",
              name: {
                text: "Lalisa",
                img: "http://icdn.dantri.com.vn/zoom/1200_630/2022/09/24/blackpink-crop-1664031736847.jpeg",
              },
              duration: "3:40",
              album: "Lalisa",
            },
            {
              key: "2",
              name: {
                text: "Blink Venom",
                img: "https://kenh14cdn.com/203336854389633024/2022/9/22/photo-8-16638206398921633207664.jpg",
              },
              duration: "5:35",
              album: "Born Pink",
            },
            {
              key: "3",
              name: {
                text: "Shut Down",
                img: "https://media.maybe.vn/attachments/fadk6fsaiaah56o-jpeg.45729/",
              },
              duration: "3:50",
              album: "Born Pink",
            },
            {
              key: "4",
              name: {
                text: "Typa Gird",
                img: "https://media.vov.vn/sites/default/files/styles/large/public/2022-04/1650936236-1638074491-un-blackpink-photograph-1.jpeg",
              },
              duration: "4:40",
              album: "Born Pink",
            },
            {
              key: "5",
              name: {
                text: "Hard to Love",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5hmJF_LP-E1WJeT1nDu6oSnXqeTIxDYEU_fePcteKLYuZQm5YJt3NTMXmaMBFU9HKvI&usqp=CAU",
              },
              duration: "4:45",
              album: "10 Downing Street",
            },
            {
              key: "6",
              name: {
                text: "Tally",
                img: "https://2sao.vietnamnetjsc.vn/images/2022/05/25/20/50/blackpink-1.jpg",
              },
              duration: "5:10",
              album: "Born Pink",
            },
            {
              key: "7",
              name: {
                text: "The Happiest Gird",
                img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/9/5/1089366/220902-YG-Naver-Post.jpeg",
              },
              duration: "4:44",
              album: "Born Pink",
            },
          ],
          address: "Korean",
        },
        {
          img: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/5/4/27917577046356093732059142080958540908584197n-1651649188170400115120.jpg",
          name: "Rose",
          list: [
            {
              key: "1",
              name: {
                text: "Lalisa",
                img: "http://icdn.dantri.com.vn/zoom/1200_630/2022/09/24/blackpink-crop-1664031736847.jpeg",
              },
              duration: "3:40",
              album: "Lalisa",
            },
            {
              key: "2",
              name: {
                text: "Blink Venom",
                img: "https://kenh14cdn.com/203336854389633024/2022/9/22/photo-8-16638206398921633207664.jpg",
              },
              duration: "5:35",
              album: "Born Pink",
            },
            {
              key: "3",
              name: {
                text: "Shut Down",
                img: "https://media.maybe.vn/attachments/fadk6fsaiaah56o-jpeg.45729/",
              },
              duration: "3:50",
              album: "Born Pink",
            },
            {
              key: "4",
              name: {
                text: "Typa Gird",
                img: "https://media.vov.vn/sites/default/files/styles/large/public/2022-04/1650936236-1638074491-un-blackpink-photograph-1.jpeg",
              },
              duration: "4:40",
              album: "Born Pink",
            },
            {
              key: "5",
              name: {
                text: "Hard to Love",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5hmJF_LP-E1WJeT1nDu6oSnXqeTIxDYEU_fePcteKLYuZQm5YJt3NTMXmaMBFU9HKvI&usqp=CAU",
              },
              duration: "4:45",
              album: "10 Downing Street",
            },
            {
              key: "6",
              name: {
                text: "Tally",
                img: "https://2sao.vietnamnetjsc.vn/images/2022/05/25/20/50/blackpink-1.jpg",
              },
              duration: "5:10",
              album: "Born Pink",
            },
            {
              key: "7",
              name: {
                text: "The Happiest Gird",
                img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/9/5/1089366/220902-YG-Naver-Post.jpeg",
              },
              duration: "4:44",
              album: "Born Pink",
            },
          ],
          address: "Korean",
        },
      ];
      const handleOppen = (item) => {
        props.setLear(item);
        window.scrollTo(0, 0);
      };
  return (
    <div className="singer-vpop">
      <div className="singer-vpop-heading">
        <div className="singer-lastday">
          <FontAwesomeIcon
            icon={faArrowsToDot}
            className="singer-lastday-icon"
          ></FontAwesomeIcon>
          <p className="singer-vpop-content">Ca Sĩ K-POP</p>
        </div>
        <a href="" className="singer-vpop-all">
          <p className="singer-vpop-tatca">Xem tất cả</p>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </a>
      </div>
      <div className="singer-vpop-list">
        {kpop.map((item, index) => (
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

export default Kpop;
