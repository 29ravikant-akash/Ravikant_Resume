import React from "react";
import "../styles/Profile.css";
import dp from "../image/dp.jpg";

function Profile() {
  return (
    <div className="container">
      <h1 className="heading">RAVIKANT'S RESUME</h1>
      <div className="container-fluid">

        <div className="row">
          <div class="col-md-4">
            <h1>Profile</h1>
            <li> <img src={dp} alt="" /> </li> 
            <li>Ravikant </li>
            <li>CGPA : 7.4 </li>
            <li>Currently in 3rd year</li>
            <li>BTECH+MTECH</li>
            <li>
              <a href="http://www.iiitm.ac.in/index.php/en/">
                ABV-IIITM GWALIOR{" "}
              </a>{" "}
            </li>
          </div>

          <div className="col-md-4">
            <h1> Hands on following things</h1>
            <li>NODE JS </li>
            <li>REACT JS </li>
            <li>EXPRESS JS </li>
            <li>MONGO</li>
            <li>MY SQL</li>
            <li>GITHUB </li>
            <li>LINUX </li>
          </div>

          <div class="col-md-4">
            <h1> My personal interest </h1>
            <li>My interest lean towards backend side.</li>
          </div>
          <div class="col-md-4">
            <h1> Projects done so far </h1>
            <li> My resume website </li>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h1>Connect via </h1>
            <li>
              <a href="https://github.com/29ravikant-akash"> Github </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ravi-kant-6a4321173/">
                {" "}
                Linkedin
              </a>
            </li>
            <li>Contact no - 9799093275</li>
            <li>Email id - 29ravikant2017@gmail.com</li>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
