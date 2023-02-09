import "./chaua.scss";
function ChauA() {
  const chaua = [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/b/f/a/8bfaeb3f9508550126393e28944318c1.jpg",
      text: "Top 100 nhạc hoa ngữ hay nhất mọi thời đại",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/d/1/9/1d19047de6252c181c11970ca8a91a86.jpg",
      text: "Top 100 nhạc phim Hàn Quốc được giới trẻ nghe nhiều nhất",
    },
    {
      img: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250531723_500.jpg",
      text: "Top 100 nhạc Trung Quốc",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/2/0/2/a202beeb7558f2e67f1bb7cf6514975c.jpg",
      text: "Top 100 nhạc Nhật Bản hot hit",
    },
    {
      img: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600239362951_500.jpg",
      text: "Top 100 nhạc hàn quốc phá đảo thị trường",
    },
  ];
  return (
    <div className="chaua">
      <div className="chaua-title">
        <p className="chaua-heading">Nhạc Châu Á</p>
      </div>
      <div className="top-music-body">
        <div className="top-music-list">
          {chaua.map((item, index) => (
            <div key={index} className="grid-col-2-3 tablet-3-4 mobile-3-4">
              <a href="" className="top-music-items">
                <div className="top-music-id">
                  <img className="top-music-img" src={item.img} alt=""></img>
                  <div className="top-music-content">
                    <h3 className="top-music-gt">{item.text}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChauA;
