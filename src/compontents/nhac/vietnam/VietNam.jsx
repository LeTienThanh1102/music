function VietNam() {
    const vietnam = [
      {
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/b/1/d/7b1d35be17804ecbda9f6493fe366749.jpg",
        text:"Top 100 nhạc phim Việt Nam hay nhất ",
      },
      {
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
        text:"Top 100 nhạc EDM cực cháy",
      },
      {
        text:"Top 100 nhạc Rap trong rap Việt ",
        img:"https://dihavina.com/wp-content/uploads/2020/02/100-rap-viet.png",
      },
      {
        text:"Top 100 nhạc không lời hay nhất, có lượt nghe nhiều nhất",
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/c/a/3/aca332d8c40d39fe5f1fdfd7fc4d6c21.jpg",
      },
      {
        text:"Top 100 nhạc USUK hay nhất Auu Mỹ",
        img:"https://avatar-ex-swe.nixcdn.com/playlist/2022/05/11/0/d/4/0/1652244707636_500.jpg",
      },
      {
        text:"Top 100 nhạc thiếu nhi hay nhất mang nhiều niềm vui",
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/c/9/4/fc94328a7c216b9d9c5eb1521f893709.jpg",
      },
      {
        text:"Top 100 nhạc KPOP",
        img:"https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600239362951_500.jpg",
      },{
        text:"Top 100 nhạc Cách mạng Việt nam",
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/2/6/4/f26467e87075a96bf974a8c49450bad5.jpg",
      },
      {
        text:"Top 100 nhạc Dance Việt nam",
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/8/0/0/b800a8b039fd00210f54e58b3309b46f.jpg",
      },
      {
        text:"Top 100 nhạc Rock Việt hay",
        img:"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/9/a/d/69adc20d10b93758ae077afc03608e02.jpg",
      },
      {
        text:"Top 100 nhạc Trữ tình",
        img:"https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600244061118_500.jpg"
      }
      ];
      return (
    <div className="top-music-body">
      <div className="top-music-list">
        {vietnam.map((item, index) => (
          <div key={index} className="grid-col-2-3 tablet-3-4 mobile-3-4">
            <a href="" className="top-music-items">
              <div className="top-music-id">
                <img className="top-music-img" src={item.img} alt=""></img>
                <div className="top-music-content">
                  <h3 className="top-music-gt">
                    {item.text}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VietNam;
