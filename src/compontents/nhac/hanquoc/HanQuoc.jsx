function HanQuoc() {
    const han = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCd32EC6v4YJO8BtG9xWVs-jE_B4tsUYUOqw&usqp=CAU",
          text: "Top 20 nhạc của các nhóm nhạc",
        },
        {
          img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/d/1/9/1d19047de6252c181c11970ca8a91a86.jpg",
          text: "Top 20 nhạc phim Hàn Quốc được giới trẻ nghe nhiều nhất",
        },
        {
          img: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/07/big-bang-2-crop-1644225669505.jpeg",
          text: "Top 20 nhạc Big Bang hay nhất",
        },
        {
          img: "https://kenh14cdn.com/Images/Uploaded/Share/2011/10/19/111020musikSNSD003.jpg",
          text: "Top 20 nhạc SNSD hay nhất",
        },
        {
          img: "https://nguoi-noi-tieng.com/photo/nhom-nhac-t-ara-1-11344.jpg",
          text: "Top 20 nhạc T-ara",
        },
        {
            img: "https://kenh14cdn.com/thumb_w/660/2020/11/6/siwonchoi12362569028064250596803916196987596674309107n-1604670380465167901597.jpg",
            text: "Top 20 nhạc Supper Junior",
          },
          {
            img: "https://cdns-images.dzcdn.net/images/artist/61c6629bf8019166fb048dd04b6f8d22/500x500.jpg",
            text: "Top 20 nhạc của các ca sĩ nổi tiếng Hàn Quốc",
          },
      ];
  return (
    <div className="chaua">
      <div className="chaua-title">
        <p className="chaua-heading">Nhạc Hàn Quốc</p>
      </div>
      <div className="top-music-body">
        <div className="top-music-list">
          {han.map((item, index) => (
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

export default HanQuoc;
