import React from "react";

import Sidebar from "./Sidebar";

import "./Dashboard.css";

import BarGraph from "./BarGraph";

import LineGraph from "./LineGraph";

import Current from "./Current";

function Dashboard() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 side_back">
            <Sidebar />
          </div>

          <div className="col-lg-10 col-md-9 col-sm-8 line_bar">
            <div className="welcome_admin">
              <h3 className="p-3">Hello, Admin!</h3>

              <div className="admin_icon">
                <img src="/Hongo.png" alt="" />
              </div>
            </div>

            <div className="current_box">
              <Current />
            </div>

            <div className="content_dashboard d-flex justify-content-center">
              <BarGraph />

              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
