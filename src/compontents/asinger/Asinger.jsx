import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./asinger.scss";
import "antd/dist/antd.css";

import { Table } from "antd";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import Kpop from "../singer/kpop/Kpop";
import Vpop from "../singer/vpop/Vpop";
import Usuk from "../singer/usuk/Usuk";
// import type { ColumnsType } from 'antd/es/table';

function Asinger({ lear, setLear }) {
  const columns = [
    {
      title: "Tên bài hát",
      dataIndex: "name",
      width: "50%",
      key: "name",
      render: (text) => (
        <div className="asing-table-col">
          <img src={text.img} alt="" className="asing-table-img" />
          <a className="asing-table-text">{text.text}</a>
        </div>
      ),
    },

    {
      title: "Album",
      dataIndex: "album",
      key: "album",
      width: "40%",
      render: (text) => <a className="asing-ablum-sec">{text}</a>,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "Duration",
      width: "10%",
      render: (text) => <a className="asing-ablum-sec">{text}</a>,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="asing">
      <div class="grid-col-2 m-4 first">
        <Sidebar />
      </div>
      <div class="grid-col-10 m-6 c-12">
        <Header />
        <div className="asing-pro">
          <div className="grid-col-4-min">
            <div className="asing-img">
              <img src={lear?.img} alt="" className="asinganh" />
              <div className="asing-infor">
                <h2 className="asing-name">{lear?.name}</h2>
                <div className="asing-address">
                  <span>Country:     </span>
                  {lear?.address}
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col-8-min">
            <h3 className="asing-list-title">
              List bài hát của ca sĩ {lear?.name}
            </h3>
            <div className="asing-list">
              <div className="asing-items">
                <Table
                  dataSource={lear?.list}
                  pagination={false}
                  columns={columns}
                />
                ;
              </div>
            </div>
          </div>
        </div>
        <div className="asing-provip">
          <Kpop setLear={setLear} />
          <Vpop setLear={setLear} />
          <Usuk setLear={setLear} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Asinger;
