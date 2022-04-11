import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./tutor.css";
  
  export default function Tutor() {
    return (
      <div className="tutor">
        <div className="tutorTitleContainer">
          
          <h1 className="tutorTitle">Edit User</h1>
          <Link to="/newTutor">
            <button className="tutorAddButton">Create</button>
          </Link>
        </div>
        <div className="tutorContainer">
          <div className="tutorShow">
            <div className="tutorShowTop">
              <img
              src ="https://logodix.com/logo/1617162.jpg"
                alt=""
                className="tutorShowImg"
              />
              <div className="tutorShowTopTitle">
  
  
                <span className="tutorShowUsername">Jessica Doner</span>
                <span className="tutorShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="tutorShowBottom">
              <span className="tutorShowTitle">Account Details</span>
              <div className="tutorShowInfo">
                <PermIdentity className="tutorShowIcon" />
                <span className="tutorShowInfoTitle">jdoner</span>
              </div>
              <div className="tutorShowInfo">
                <CalendarToday className="tutorShowIcon" />
                <span className="tutorShowInfoTitle">10.12.1999</span>
              </div>
  
  
  
              <span className="tutorShowTitle">Contact Details</span>
  
              <div className="tutorShowInfo">
                <PhoneAndroid className="tutorShowIcon" />
                <span className="tutorShowInfoTitle">+1 000 000 0000</span>
              </div>
  
              <div className="tutorShowInfo">
                <MailOutline className="tutorShowIcon" />
                <span className="tutorShowInfoTitle">jdoner@ewu.edu</span>
              </div>
  
              <div className="tutorShowInfo">
                <LocationSearching className="tutorShowIcon" />
                <span className="tutorShowInfoTitle">Spokane | WA</span>
              </div>
  
            </div>
  
          </div>
  
  
          <div className="tutorUpdate">
            <span className="tutorUpdateTitle">Edit</span>
            <form className="tutorUpdateForm">
              <div className="tutorUpdateLeft">
                <div className="tutorUpdateItem">
  
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="jdoner"
                    className="tutorUpdateInput"
                  />
                </div>
                <div className="tutorUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Jessica Doner"
                    className="tutorUpdateInput"
                  />
                </div>
                <div className="tutorUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="jdoner@ewu.edu"
                    className="tutorUpdateInput"
                  />
                </div>
                <div className="tutorUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 000 000 0000"
                    className="tutorUpdateInput"
                  />
                </div>
                
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://logodix.com/logo/1617208.jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }