import Kpop from "./kpop/Kpop";
import "./singer.scss";
import Usuk from "./usuk/Usuk";
import Vpop from "./vpop/Vpop";
function Singer({ setLear }) {
  return (
    <div id="no4" className="singer">
      <div className="singer-headingg">
        <i className="fa-solid fa-angles-right music-new-icon"></i>
        <a href="" className="music-new-heading">
          CA SĨ NỔI BẬT
        </a>
      </div>
      <div className="singer-body">
        <Vpop setLear={setLear} />
        <Kpop setLear={setLear} />
        <Usuk setLear={setLear} />
      </div>
    </div>
  );
}

export default Singer;
