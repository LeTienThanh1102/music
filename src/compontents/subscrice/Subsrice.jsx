import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './subscrice.scss'
function Subsrice() {
    const sub=[
        {
            id:1,
            name:"Hòa Minzy Official",
            img:"https://ss-images.saostar.vn/w800/pc/1650525524699/saostar-vv5chad4rkwazmm4.jpg",
            title:"Nguyễn Thị Hoà thường được biết đến với nghệ danh Hoà Minzy, là một nữ ca sĩ trẻ kiêm diễn viên người Việt Nam. Cô được biết đến sau khi đạt giải Quán quân của chương trình Học viện Ngôi sao mùa đầu tiên vào năm 2014. Cô là cựu thành viên nhóm Ruby",
        },
        {
            id:2,
            name:"Soobbin Hoàng Sơn ",
            img:"https://ss-images.saostar.vn/w800/2020/02/02/6912237/ngang.jpg",
            title:"Nguyễn Hoàng Sơn, thường được biết đến với nghệ danh SOOBIN hoặc Soobin Hoàng Sơn là nam ca sĩ, nhạc sĩ, rapper, nhà sản xuất âm nhạc thuộc công ty SpaceSpeakers Group tại Việt Nam. Anh là một trong số ít nam ca sĩ tại Việt Nam có khả năng thể hiện được nhiều dòng nhạc và kĩ năng trình diễn sân khấu nổi bật.",
        },
        {
            id:3,
            name:"Phương Ly Official",
            img:"https://ss-images.saostar.vn/2019/08/18/5863580/phuong-ly-sua-mui-1.jpg",
            title:"Trần Phương Ly, thường được biết đến với nghệ danh Phương Ly, là một nữ ca sĩ người Việt Nam. Cô bắt đầu nổi danh với vai trò là một nhân vật nổi tiếng trên mạng xã hội, sau đó hoạt động với tư cách là một nghệ sĩ âm nhạc và nhanh chóng nhận về những thành công lớn",
        },
        {
            id:4,
            name:"Sơn Tùng MTP_MTP Official",
            img:"https://vtv1.mediacdn.vn/thumb_w/650/2020/8/5/11707537937887109944759096401674123002289793o-1596615779281752133639-crop-1596615789986723827443.jpg",
            title:"Nguyễn Thanh Tùng, thường được biết đến với nghệ danh Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper và diễn viên người Việt Nam. Sinh ra ở thành phố Thái Bình, thời thơ ấu, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ.",
        },
        {
            id:5,
            name:"Min Official",
            img:"https://i.ytimg.com/vi/7m8ek8D9me0/maxresdefault.jpg",
            title:"Nguyễn Minh Hằng, thường được biết đến với nghệ danh Min là một nữ ca sĩ và vũ công người Việt Nam. Khởi đầu là thành viên của nhóm nhảy St.319, cô ra mắt với tư cách ca sĩ solo vào năm 2013 với đĩa đơn đầu tay 'Tìm'. ",
        },
        {
            id:6,
            name:"Minh Tú Official",
            img:"https://vcdn1-giaitri.vnecdn.net/2019/11/18/minh-tu-1-2212-1574042681.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=2-FjW7msevqsykDId4ItIg",
            title:"Minh Tú là một Hoa hậu, người mẫu thời trang nổi tiếng người Việt Nam, từng đạt giải bạc Siêu mẫu Việt Nam 2013, á quân Asia's Next Top Model 2017, lọt Top 10 Hoa hậu Siêu quốc gia 2018 cùng giải thưởng Hoa hậu Siêu quốc gia châu Á 2018.",
        },
        {
            id:7,
            name:"Tóc Tiên",
            img:"https://image.thanhnien.vn/w1024/Uploaded/2022/znetns/2022_10_19/mv-906090-toc-tien-ft-mew-amazing-3-4381.jpg",
            title:"Nguyễn Khoa Tóc Tiên, hay còn được biết đến với nghệ danh Tóc Tiên, là một nữ ca sĩ người Việt Nam. Tiên đã vinh dự giành giải Cống hiến 2019 ở hạng mục 'Bài hát của năm' cho Có ai thương em như anh. Cô từng là ca sĩ của Trung tâm Thúy Nga và thường xuyên biểu diễn trong các chương trình Paris By Night của trung tâm.",
        },
        {
            id:8,
            name:"Thiều Bảo Trâm Official",
            img:"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/4/13/1033773/277530361_5122639269.jpg",
            title:"Thiều Bảo Trâm tốt nghiệp vào trong trường Cao đẳng văn hóa nghệ thuật Hà Nội. Với giọng hát đầy nội lực cùng kỹ thuật, cô là gương mặt triển vọng từ các cuộc thi như: Giọng Hát Việt 2013, Ngôi Nhà Âm Nhạc hay Tiếng Ca Học Đường.",
        },
        {
            id:9,
            name:"Văn Mai Hương Official",
            img:"https://image.thanhnien.vn/w980/Uploaded/2022/znetns/2021_09_20/huong9_tayz.jpg",
            title:"Văn Mai Hương là một nữ ca sĩ nhạc trẻ người Việt Nam. Cô được biết đến sau khi tham gia và đoạt ngôi vị Á quân Vietnam Idol 2010 vào ngày 25 tháng 12 năm 2010.",
        },
        {
            id:10,
            name:"Hiền Hồ Official",
            img:"https://yt3.ggpht.com/HJaRj2po2fuUU4zOE5VVo1n9Csw_CtKfH3M0UmI_KPxYb2_-gfeTi8qaXxTgpH8006x0I7Bydg=s900-c-k-c0x00ffffff-no-rj",
            title:"Hồ Thị Hiền, thường được biết đến với nghệ danh Hiền Hồ, là một nữ ca sĩ người Việt Nam.",
        },
    ]
  return (
    <div className="subrcrice">
      <div className="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div className="grid-col-10 m-6 c-12">
        <Header />
        <div className="subrcrice-main">
            <div className="subrcrice-produc">
                <div className="subrcrice-list">
                    {sub.map((item)=>(
                        <div className="subrcrice-item">
                            <div className="subrcrice-ava">
                                <img src={item.img} alt="" className="subrcrice-img" />
                            </div>
                            <div className="subrcrice-infor">
                                <p className="subrcrice-name">{item.name}</p>
                                <div className="subrcrice-them">Một số thông tin:</div>
                                <div className="subrcrice-title">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Subsrice;
