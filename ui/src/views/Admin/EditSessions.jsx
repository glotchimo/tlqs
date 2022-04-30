import "./editsessions.css";
export default  function UserEdit() {

return (
<div className="sessions">
  <div className="titleContainer">
    <h1 className="title">Edit User</h1>
  </div>
  <div className="container">
    <div className="update">
      <form className="form">
        <div className="left">

          <div className="item">

            <label>Student</label>
            <input type="text" placeholder="student" className="input" />
          </div>

          <div className="item">
            <label>Tutor</label>
            <input type="text" placeholder="tutor" className="input" />
          </div>

          <div className="item">
            <label>Course</label>
            <input type="text" placeholder="course" className="input" />
          </div>
          <div className="item">
            <label>Topic</label>
            <input type="text" placeholder="topic" className="input" />
          </div>
          <div className="item">
            <label>Description</label>
            <input type="text" placeholder="Description" className="input" />
          </div>
          <div className="item">
            <label>Retrospective</label>
            <input type="text" placeholder="retrospective" className="input" />
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