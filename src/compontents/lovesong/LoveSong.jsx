import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './lovesong.scss'
function LoveSong() {
  return (
    <div className="lovesong">
      <div class="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div class="grid-col-10 m-6 c-12">
        <Header />
        <div className="lovesong-main">
            Chưa có bài hát yêu thích
        </div>
      </div>
    </div>
  );
}

export default LoveSong;
