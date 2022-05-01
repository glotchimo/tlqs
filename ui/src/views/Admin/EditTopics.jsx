import "./edittopics.css";
import * as React from 'react';
export default  function EditTopics() {

return (
<div className="topic">
  <div className="titleContainer">
    <h1 className="title">Edit Topics</h1>
  </div>
  <div className="container">
    <div className="update">
      <form className="form">
        <div className="left">

          <div className="item">

            <label>Name</label>
            <input type="text" placeholder="name" className="input" />
          </div>

          <div className="item">
            <label>CourseID</label>
            <input type="text" placeholder="courseid" className="input" />
          </div>

        </div>
        <div className="right">
          <div className="upload">
            <img className="img" src="https://logodix.com/logo/1617208.jpg" alt="" />
            <label htmlFor="file">
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="button">Update</button>
        </div>
      </form>

    </div>
  </div>
</div>
);
}