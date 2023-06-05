import React from "react";
import Images from "../assets/img/Images";

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard Dashboard_MainFlex background-color-grey-10">
        <div className="Block BlockLeft background-color-grey-9 border-radius-1 flex-center-center box-shadow-2">
          <img className="LeftImage" src={Images.Test1} alt="" />
        </div>
        <div className="Block BlockRight ">
          <div className="BlockRightA background-color-grey-9 border-radius-1 flex-center-center padding-1 text-align-center flex-dir-column box-shadow-2">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              officiis? Dolore dignissimos quo id ipsum officia nostrum tenetur
              odit quos. Quae aut officiis maiores assumenda quo quisquam,
              laboriosam dolorum velit!
            </h2>
            <h4>El lorem </h4>
          </div>
          <div className="BlockRightB background-color-grey-9 border-radius-1 box-shadow-2"></div>
          <div className="BlockRightC background-color-grey-9 border-radius-1 padding-1 flex-center-center flex-dir-column box-shadow-2">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum
              harum, et nam tempore eos, laborum tenetur sequi dolor eius
              doloremque? Quasi quisquam rerum sapiente sed aut ratione aliquam
              ad!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
