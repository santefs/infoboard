import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard Dashboard_MainFlex background-color-grey-10">
        <div className="Block BlockLeft background-color-grey-7 border-radius-1">
          <h1>left</h1>
        </div>
        <div className="Block BlockRight ">
          <div className="BlockRightA background-color-grey-7 border-radius-1"></div>
          <div className="BlockRightB background-color-grey-7 border-radius-1"></div>
          <div className="BlockRightC background-color-grey-7 border-radius-1"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
