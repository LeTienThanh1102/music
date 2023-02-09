function Aumy() {
    const au = [
        {
          img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/d/6/0/3d60491e7407321dbce823a2e8588b92.jpg",
          text: "Top 50 nhạc Audiophile Âu Mỹ",
        },
        {
          img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/a/5/9/fa59f41bb360d16b5089f5d26a7a761c.jpg",
          text: "Top 50 nhạc Trance/ House/ Techno",
        },
        {
          img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/3/5/5/c3551ca47f882694e9248722e4127d8e.jpg",
          text: "Top 50 nhạc Cello hay nhất",
        },
        {
          img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/b/f/5/9bf5be05cd389e02ee0ba2972d53e92f.jpg",
          text: "Top 50 nhạc New Age/ World Music",
        },
      ];
  return (
    <div className="chaua">
      <div className="chaua-title">
        <p className="chaua-heading">Nhạc Âu Mỹ</p>
      </div>
      <div className="top-music-body">
        <div className="top-music-list">
          {au.map((item, index) => (
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

export default Aumy;
