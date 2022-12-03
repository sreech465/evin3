import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Display() {
  const navigate = useNavigate();
  const handleProject = () => {
    navigate("/details");
  };

  const handleProcess = () => {
    navigate("/pdetails");
  };

  const handleLearning = () => {
    navigate("/elearning");
  };
  return (
    <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <img src="http://52.139.224.15/assets/logos/Vector.png" />

      <h2> Welcome to MyWin</h2>
      <div>
        Here you can access a variety of features and functionalities, as well
        as a wealth of industry information and insights to impact your business
        outcomes.
      </div>
      <div style={{ display: "flex" }}>
        <div class="card" onClick={handleProject}>
          <img
            style={{ width: 50, height: 50 }}
            class="card-img-top"
            src="http://52.139.224.15/assets/logos/icon_projects_2x.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">my Projects</h5>
            <p class="card-text">
              With a simple click, you can manage your spare parts lists and RFQ
              for your installed base..
            </p>
          </div>
        </div>

        <div class="card" onClick={handleProcess}>
          <img
            style={{ width: 40, height: 50 }}
            class="card-img-top"
            src="http://52.139.224.15/assets/logos/icon_installation_2x.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">my Installations</h5>
            <p class="card-text">
              Access your instruction manuals maintenance, installation,
              cleaning and troubleshooting anytime and anywhere
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        With a simple click, you can manage your spare parts lists and RFQ for
        your installed base.
      </div> */}

      <div class="card" onClick={handleLearning}>
        <img
          style={{ width: 40, height: 50 }}
          class="card-img-top"
          src="http://52.139.224.15/assets/logos/icon_learning_2x.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">My Learning</h5>
          <p class="card-text">
            Access your instruction manuals for installation, cleaning and
            troubleshooting anytime and
          </p>
        </div>
      </div>
    </div>
  );
}

export default Display;
