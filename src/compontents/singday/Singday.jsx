import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./singday.scss";
function Singday(props) {
  const sings = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAgzswx-SdaS-QS69PVL_sGLoB_-k0jJV7w&usqp=CAU",
      name: "Nhạc đầu tuần tràn dầy năng lượng",
      title: "Nhạc vui động của các ca sĩ Vpop",
      day: [
        {
          name: "Sáng Mắt Chưa",
          duration: "3:54",
          img: "",
          singer: "Trúc Nhân",
        },
        {
          name: "When We Were Young",
          duration: "4:12",
          img: "",
          singer: "Adele",
        },
        {
          name: "Tình Nhân Ơi",
          duration: "#:45",
          img: "",
          singer: "Orange",
        },
        {
          name: "Buông",
          duration: "5:12",
          img: "",
          singer: "Vũ Thảo Nhi",
        },
        {
          name: "em bỏ hút thuốc chưa?",
          duration: "3:22",
          img: "",
          singer: "Bích Phương",
        },
        {
          name: "Chạy khỏi thế giới này",
          duration: "3:44",
          img: "",
          singer: "DaLaB if Phương Ly",
        },
        {
          name: "Dẫu có lỗi lầm",
          duration: "3:50",
          img: "",
          singer: "Reddy",
        },
        {
          name: "Sợ rằng em biết anh còn yêu em",
          duration: "4:34",
          img: "",
          singer: "JUNN D",
        },
        {
          name: "Em hát ai nghe",
          duration: "3:33",
          img: "",
          singer: "Orange",
        },
        {
          name: "Mặt Mộc",
          duration: "4:32",
          img: "",
          singer: "Phạm Ngọc Anh, Vanh,BMZ",
        },
        {
          name: "Phản Bội Chính Mình",
          duration: "4:45",
          img: "",
          singer: "Vương Anh Tú",
        },
        {
          name: "Tàn Nhẫn",
          duration: "3:52",
          img: "",
          singer: "Lương Ming Trang",
        },
        {
          name: "Răng Khôn",
          duration: "3:22",
          img: "",
          singer: "Phí Phương Anh",
        },
        {
          name: "Yêu Như Ngày Cuối",
          duration: "4:23",
          img: "",
          singer: "Mai Tiến Dũng",
        },
        {
          name: "Sài Gòn hôm nay mưa",
          duration: "4:22",
          img: "",
          singer: "Hoàng Uyên",
        },
        {
          name: "Cớ sao em buồn",
          duration: "3:53",
          img: "",
          singer: "Nguyễn Trọng Tài",
        },
        {
          name: "Tan Trong Mưa",
          duration: "4:31",
          img: "",
          singer: "Trung Quân Idol",
        },
      ],
    },
    {
      img: "https://i1.sndcdn.com/artworks-mehBEzaRZBeUoQ4x-eIL85Q-t500x500.jpg",
      name: "Thứ bar vui vẻ, dịu dàng",
      title:
        "Bản nhạc nhẹ nhàng, du dương mang sự nhẹ nhàng, dễ nghe của các ca sĩ Trung Quốc",
      day: [
        {
          name: "Anti-Hero",
          img: "",
          duration: "3:21",
          singer: "Taylor Swift",
        },
        {
          name: "Head in the Clouds",
          img: "",
          duration: "3:04",
          singer: "Hayd",
        },
        {
          name: "As It Was",
          img: "",
          duration: "4:12",
          singer: "Harry Styles",
        },
        {
          name: "Sunroof",
          img: "",
          duration: "3:15",
          singer: "Nicky Youre, Dazy",
        },
        {
          name: "I Drink Wine",
          img: "",
          duration: "3:11",
          singer: "Adele",
        },
        {
          name: "I like you",
          img: "",
          duration: "3:16",
          singer: "Post Malone, Doja Cat",
        },
        {
          name: "late Night Talking",
          img: "",
          duration: "2:59",
          singer: "Harry Styles",
        },
        {
          name: "Hold Me Closer",
          img: "",
          duration: "3:22",
          singer: "Elton John",
        },
        {
          name: "STAY",
          img: "",
          duration: "2:45",
          singer: "The Kid LAROI, Justin Bieber",
        },
        {
          name: "baby",
          img: "",
          duration: "3:23",
          singer: "Justin Bieber",
        },
        {
          name: "Bad Habit",
          img: "",
          duration: "3:20",
          singer: "Steve Lady",
        },
        {
          name: "Angel baby",
          img: "",
          duration: "4:02",
          singer: "Troye Sivan",
        },
        {
          name: "All By MySelf",
          img: "",
          duration: "3:45",
          singer: "Alok, Sigala",
        },
        {
          name: "Bam Bam",
          img: "",
          duration: "3:30",
          singer: "Camila Cabello",
        },

        {
          name: "SNAP",
          img: "",
          duration: "4:08",
          singer: "Rosa Linn",
        },
        {
          name: "Made You Look",
          img: "",
          duration: "3:28",
          singer: "Meghan Trainor",
        },
        {
          name: "Forget Me",
          img: "",
          duration: "3:12",
          singer: "Lewis Capaldi",
        },
        {
          name: "Big Energy",
          img: "",
          duration: "3:45",
          singer: "Latto, Mariah Carey",
        },
        {
          name: "Only",
          img: "",
          duration: "4:10",
          singer: "LeeHi",
        },
        {
          name: "Send My Love",
          img: "",
          duration: "3:27",
          singer: "Adele",
        },
      ],
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2735ed47ad9b43147b1b79bddc4",
      name: "Thứ tư với âm nhạc sống đông, bắt tai",
      title: "Những bản nhạc rap, chất như nước cất đến từ các rapper RapViet",
      day: [
        {
          name: "Pink Venom",
          img: "",
          duration: "3:12",
          singer: "Black Pink",
        },
        {
          name: "LOVE DIVE",
          img: "",
          duration: "4:00",
          singer: "IVE",
        },
        {
          name: "At that Moment",
          img: "",
          duration: "3:50",
          singer: "WSG Wannbe",
        },
        {
          name: "Shut Down",
          img: "",
          duration: "4:22",
          singer: "Black Pink",
        },
        {
          name: "Complex",
          img: "",
          duration: "3:42",
          singer: "BE'O, Zico",
        },
        {
          name: "Because we loved",
          img: "",
          duration: "3:31",
          singer: "kang Min Yyung",
        },
        {
          name: "Haru Haru",
          img: "",
          duration: "4:15",
          singer: "Big Bang",
        },
        {
          name: "Sorry Sorry",
          img: "",
          duration: "3:11",
          singer: "Super Junior",
        },
        {
          name: "LoveLy",
          img: "",
          duration: "2:59",
          singer: "T-ara",
        },
        {
          name: "The Boy",
          img: "",
          duration: "3:02",
          singer: "SNSD",
        },
        {
          name: "Loser",
          img: "",
          duration: "4:10",
          singer: "Big Bang",
        },
        {
          name: "We are in love",
          img: "",
          duration: "3:49",
          singer: "Davichi, T-ara",
        },
        {
          name: "Love yourself",
          img: "",
          duration: "4:11",
          singer: "Justin Bieber",
        },
        {
          name: "How you like that",
          img: "",
          duration: "4:12",
          singer: "Black Pink",
        },
        {
          name: "Blue",
          img: "",
          duration: "3:41",
          singer: "Big Bang",
        },
        {
          name: "Love Song",
          img: "",
          duration: "3:45",
          singer: "Mari Sandu",
        },
        {
          name: "I missed you",
          img: "",
          duration: "3:12",
          singer: "IUUUUUUU",
        },
        {
          name: "Only",
          img: "",
          duration: "5:12",
          singer: "LeeHi",
        },
        {
          name: "Bang Bang Bang",
          img: "",
          duration: "4:49",
          singer: "Big Bang",
        },
      ],
    },
    {
      img: "https://pbs.twimg.com/media/EjixO8UVkAMqFtq.jpg",
      name: "Thứ năm với bản nhạc của các nhóm nhạc KPOP",
      title: "Ablum các nhóm nhạc lớn Kpop như BlackPink, BTS,...",
      day: [
        {
          name: "Kết thúc bắt đầu",
          img: "",
          duration: "4:12",
          singer: "Đức Phúc if DalaB",
        },
        {
          name: "Bài Ngửa",
          img: "",
          duration: "3:42",
          singer: "Vương Anh Tú",
        },
        {
          name: "Generation",
          img: "",
          duration: "2:44",
          singer: "Triples",
        },
        {
          name: "Cơn mưa của màu hạ",
          img: "",
          duration: "4:22",
          singer: "Đinh Mạnh Ninh",
        },
        {
          name: "Mùa thu cho em",
          img: "",
          duration: "3:49",
          singer: "Junky San",
        },
        {
          name: "For the night",
          img: "",
          duration: "3:11",
          singer: "Chloe, Latto",
        },
        {
          name: "Lu mờ tâm trí",
          img: "",
          duration: "5:11",
          singer: "Ngô Kiến Huy, Vương Anh Tú",
        },
        {
          name: "Thích em hơi nhiều",
          img: "",
          duration: "3:12",
          singer: "Wren Evans",
        },
        {
          name: "Diều tồi tệ của em",
          img: "",
          duration: "3:51",
          singer: "Khói",
        },
        {
          name: "Birthday",
          img: "",
          duration: "4:31",
          singer: "TEN",
        },
        {
          name: "Cô đơn trên Sofa",
          img: "",
          duration: "4:21",
          singer: "Hồ Ngọc Hà",
        },
        {
          name: "Boys Like You",
          img: "",
          duration: "4:11",
          singer: "IZTY",
        },

        {
          name: "Người Như Anh",
          img: "",
          duration: "3:55",
          singer: "Mai Tiến Dũng",
        },
        {
          name: "Giấc Mơ đẹp",
          img: "",
          duration: "4:33",
          singer: "Nguyễn Trọng Tài",
        },
        {
          name: "Lời có cánh",
          img: "",
          duration: "4:12",
          singer: "OSAD",
        },
        {
          name: "Nỗi nhớ khi xưa",
          img: "",
          duration: "1:59",
          singer: "Khói",
        },
        {
          name: "Bùa yêu",
          img: "",
          duration: "3:46",
          singer: "Bích phương",
        },
        {
          name: "Đâu chỉ riêng em",
          img: "",
          duration: "4:34",
          singer: "Mỹ Tâm",
        },
        {
          name: "Nắm lấy tay anh",
          img: "",
          duration: "5:10",
          singer: "Tuấn Hưng",
        },
      ],
    },
    {
      img: "https://globalcastingresources.com/wp-content/uploads/2019/01/image3.png",
      name: "Thứ sáu với sự ấm áp, rực cháy của US-UK",
      title:
        "Nhạc Âu Mỹ mang đến năng lượng, sức sống, với bản remix chất lượng",
      day: [
        {
          name: "Ừ! Em xin lỗi",
          img: "",
          duration: "4:22",
          singer: "Hoàng Yến Chibi,B Ray,Khắc Hưng",
        },
        {
          name: "ThichThich",
          img: "",
          duration: "3:26",
          singer: "Phương Ly",
        },
        {
          name: "Có đâu ai ngờ",
          img: "",
          duration: "4:32",
          singer: "Cầm",
        },
        {
          name: "Căn gác mùa hè",
          img: "",
          duration: "3:41",
          singer: "Phùng Khánh Linh",
        },
        {
          name: "Có chơi có chịu",
          img: "",
          duration: "4:11",
          singer: "Karik,Only C",
        },

        {
          name: "Sao anh chưa về",
          img: "",
          duration: "3:59",
          singer: "Amee if Ricky Star",
        },
        {
          name: "Phải chăng em đã yêu",
          img: "",
          duration: "4:29",
          singer: "Junky San",
        },
        {
          name: "Bài này không đẻ diễn",
          img: "",
          duration: "4:11",
          singer: "Anh Tú Atus",
        },
        {
          name: "Ngã Tư không đèn",
          img: "",
          duration: "3:54",
          singer: "Trang, Khoa Vũ",
        },
        {
          name: "See Tình",
          img: "",
          duration: "4:33",
          singer: "Hoàng Thùy Linh",
        },
        {
          name: "Tớ thích cậu",
          img: "",
          duration: "3:44",
          singer: "Han Sara",
        },
        {
          name: "Phải lòng anh",
          img: "",
          duration: "4:24",
          singer: "Min",
        },
        {
          name: "Có em chờ",
          img: "",
          duration: "3:45",
          singer: "Min, Mr.A",
        },
        {
          name: "Shay Năngg",
          img: "",
          duration: "3:12",
          singer: "Amee if Obito",
        },
        {
          name: "Hương",
          img: "",
          duration: "4:51",
          singer: "Văn Mai Hương",
        },
        {
          name: "Ngày thương tháng nhớ năm đợi",
          img: "",
          duration: "3:14",
          singer: "S.T Sơn Thạch",
        },
        {
          name: "This Way",
          img: "",
          duration: "3:48",
          singer: "Cara",
        },

        {
          name: "Dịu dàng em đến",
          img: "",
          duration: "4:23",
          singer: "Erik",
        },
        {
          name: "Yêu em dại khờ",
          img: "",
          duration: "4:56",
          singer: "Lou Hoàng",
        },
      ],
    },
    {
      img: "https://i.ytimg.com/vi/-gUmnOJT3kE/maxresdefault.jpg",
      name: "Thứ bảy chill chill",
      title:
        "Chill chill với các bài hát của Vũ, Đen Vâu,... Các bản mashup vip pro",
      day: [
        {
          name: "Chuyện đôi ta",
          img: "",
          duration: "4:12",
          singer: "Emcee(Dalab) if Muộii",
        },
        {
          name: "vaicaunoicokhiennguoithaydoi",
          img: "",
          duration: "3:44",
          singer: "GREY D",
        },
        {
          name: "Mơ",
          img: "",
          duration: "4:33",
          singer: "Vũ Cát Tường",
        },
        {
          name: "Có ai thuiwng em như anh",
          img: "",
          duration: "5:32",
          singer: "Tóc Tiên",
        },
        {
          name: "Mặt Trời của em",
          img: "",
          duration: "3:52",
          singer: "Phương Ly",
        },
        {
          name: "Là do em xui thôi",
          img: "",
          duration: "4:22",
          singer: "Khói, Sofia, Châu Đăng Khoa",
        },
        {
          name: "Waiting for you",
          img: "",
          duration: "3:51",
          singer: "MONO",
        },
        {
          name: "Em Không Thể",
          img: "",
          duration: "4:15",
          singer: "Tiên Tiên",
        },
        {
          name: "Anh chưa thương em đến vậy đâu ",
          img: "",
          duration: "3:44",
          singer: "Lady Mây",
        },
        {
          name: "Một ngày nỗi đâu",
          img: "",
          duration: "4:28",
          singer: "Trung Quân Idol",
        },
        {
          name: "Vì anh đâu có biết",
          img: "",
          duration: "3:28",
          singer: "Madihu",
        },
        {
          name: "Gác lại âu lo",
          img: "",
          duration: "4:26",
          singer: "Miu lê if DaLaB",
        },

        {
          name: "Anh đánh rơi người yêu này",
          img: "",
          duration: "3:21",
          singer: "Amee if Andiez",
        },
        {
          name: "Có hẹn với Thanh Xuân",
          img: "",
          duration: "5:11",
          singer: "MonStar",
        },
        {
          name: "Khi em Lớn",
          img: "",
          duration: "3:46",
          singer: "Orange if Hoàng Dũng",
        },
        {
          name: "Nàng Thơ",
          img: "",
          duration: "5:12",
          singer: "Hoàng Dũng",
        },
        {
          name: "Thằng Điên",
          img: "",
          duration: "4:36",
          singer: "Justatee if Phương Ly",
        },
        {
          name: "Và Ngày Nào Đó",
          img: "",
          duration: "3:56",
          singer: "Vũ Thảo My if Quang Trung",
        },

        {
          name: "Đường Một Chiều",
          img: "",
          duration: "5:22",
          singer: "Huỳnh Tú",
        },
        {
          name: "Hôm Nay Tôi Buồn",
          img: "",
          duration: "4:27",
          singer: "Phùng Khánh Linh",
        },
        {
          name: "Năm ấy",
          img: "",
          duration: "5:23",
          singer: "Đức Phúc",
        },

        {
          name: "Em không là duy nhất",
          img: "",
          duration: "4:13",
          singer: "Tóc Tiên",
        },
      ],
    },
    {
      img: "https://danviet.mediacdn.vn/296231569849192448/2022/6/10/dsc07679-16548611581171699526440.jpg",
      name: "Chủ nhật đi ngủ",
      title: "Nhạc âm đềm, nhẹ nhàng",
      day: [
        {
          name: "906090",
          img: "",
          duration: "4:05",
          singer: "Tóc Tiên",
        },
        {
          name: "Giữa đại lộ đông tây",
          img: "",
          duration: "3:47",
          singer: "Uyên Linh",
        },
        {
          name: "Vỡ Tan",
          img: "",
          duration: "4:52",
          singer: "Trịnh Thăng Bình",
        },
        {
          name: "Như vậy nhé",
          img: "",
          duration: "3:42",
          singer: "Dương Trần Nghĩa",
        },
        {
          name: "Chân Ái",
          img: "",
          duration: "4:31",
          singer: "Orange if Châu Đăng Khoa",
        },
        {
          name: "Head in the Clouds",
          img: "",
          duration: "3:08",
          singer: "Hayd",
        },
        {
          name: "Gặp nu=hưng không ở lai",
          img: "",
          duration: "7:12",
          singer: "Hiền Hồ",
        },
        {
          name: "Chạy ngay đi",
          img: "",
          duration: "4:33",
          singer: "Sơn Tùng MTP",
        },
        {
          name: "Hồi ức",
          img: "",
          duration: "4:05",
          singer: "Phan Mạnh Quỳnh",
        },
        {
          name: "Yêu một người có lẽ",
          img: "",
          duration: "3:55",
          singer: "Miu Lê",
        },
        {
          name: "Nơi này có anh",
          img: "",
          duration: "3:43",
          singer: "Sơn Tùng MTP",
        },
        {
          name: "Yêu anh",
          img: "",
          duration: "3:07",
          singer: "Miu Lê",
        },
        {
          name: "Ai cũng xó ngày xưa",
          img: "",
          duration: "4:13",
          singer: "Phan Mạnh Quỳnh",
        },
        {
          name: "Sugger",
          img: "",
          duration: "3:39",
          singer: "Marron 5",
        },
        {
          name: "Lặng yên ",
          img: "",
          duration: "4:12",
          singer: "Thùy Chi",
        },
        {
          name: "Đốt",
          img: "",
          duration: "3:47",
          singer: "Văn Mai Hương",
        },
        {
          name: "Ngày chưa giông bão",
          img: "",
          duration: "3:49",
          singer: "Bùi Lan Hương",
        },
        {
          name: "Ước Mơ của mẹ",
          img: "",
          duration: "4:36",
          singer: "Văn Mai Hương",
        },
        {
          name: "Send My Love",
          img: "",
          duration: "3:44",
          singer: "Adele",
        },
        {
          name: "Pink!",
          img: "",
          duration: "4:11",
          singer: "Nata Russes",
        },
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBX5Y4meUFuN6-8YgptQLW6RX3AzefMMnnQ&usqp=CAU",
      name: "Tống hợp",
      title: "Tất cả các thể loại, mang đậm tính giải trí, vui vẻ",
      day: [
        {
          name: "906090",
          img: "",
          duration: "4:05",
          singer: "Tóc Tiên",
        },
        {
          name: "Giữa đại lộ đông tây",
          img: "",
          duration: "3:47",
          singer: "Uyên Linh",
        },
        {
          name: "Vỡ Tan",
          img: "",
          duration: "4:52",
          singer: "Trịnh Thăng Bình",
        },
        {
          name: "Như vậy nhé",
          img: "",
          duration: "3:42",
          singer: "Dương Trần Nghĩa",
        },
        {
          name: "Chân Ái",
          img: "",
          duration: "4:31",
          singer: "Orange if Châu Đăng Khoa",
        },
        {
          name: "Head in the Clouds",
          img: "",
          duration: "3:08",
          singer: "Hayd",
        },
        {
          name: "Gặp nu=hưng không ở lai",
          img: "",
          duration: "7:12",
          singer: "Hiền Hồ",
        },
        {
          name: "Chạy ngay đi",
          img: "",
          duration: "4:33",
          singer: "Sơn Tùng MTP",
        },
        {
          name: "Hồi ức",
          img: "",
          duration: "4:05",
          singer: "Phan Mạnh Quỳnh",
        },
        {
          name: "Yêu một người có lẽ",
          img: "",
          duration: "3:55",
          singer: "Miu Lê",
        },
        {
          name: "Nơi này có anh",
          img: "",
          duration: "3:43",
          singer: "Sơn Tùng MTP",
        },
        {
          name: "Yêu anh",
          img: "",
          duration: "3:07",
          singer: "Miu Lê",
        },
        {
          name: "Ai cũng xó ngày xưa",
          img: "",
          duration: "4:13",
          singer: "Phan Mạnh Quỳnh",
        },
        {
          name: "Sugger",
          img: "",
          duration: "3:39",
          singer: "Marron 5",
        },
        {
          name: "Lặng yên ",
          img: "",
          duration: "4:12",
          singer: "Thùy Chi",
        },
        {
          name: "Đốt",
          img: "",
          duration: "3:47",
          singer: "Văn Mai Hương",
        },
        {
          name: "Ngày chưa giông bão",
          img: "",
          duration: "3:49",
          singer: "Bùi Lan Hương",
        },
        {
          name: "Ước Mơ của mẹ",
          img: "",
          duration: "4:36",
          singer: "Văn Mai Hương",
        },
        {
          name: "Send My Love",
          img: "",
          duration: "3:44",
          singer: "Adele",
        },
        {
          name: "Pink!",
          img: "",
          duration: "4:11",
          singer: "Nata Russes",
        },
      ],
    },
  ];
  const handleDay = (item) => {
    props.setDay(item);
    window.scrollTo(0, 0);
  };
  return (
    <div className="singday">
      <div className="singday-heading">
        <FontAwesomeIcon icon={faAngleRight} className="music-new-icon" />
        <a href="" className="music-new-heading">
          List nhạc theo ngày
        </a>
      </div>
      <div className="singday-body">
        <div className="row wide">
          {sings.map((item, index) => (
            <div key={index} className="grid-col-2-3 tablet-6 mobile-6">
              <div className="singday-list">
                <Link
                  to="/day"
                  className="singday-items"
                  onClick={() => handleDay(item)}
                >
                  <div className="singday-last">
                    <img src={item.img} alt="" className="singday-img" />
                  </div>

                  <div className="singday-content">
                    <p className="singday-name">{item.name}</p>
                    <div className="singday-commnet">{item.title}</div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Singday;
