import "./user.css";
export default  function UserEdit() {

return (
<div className="user">
  <div className="titleContainer">
    <h1 className="title">Edit User</h1>
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
            <label>Email</label>
            <input type="text" placeholder="username@ewu.edu" className="input" />
          </div>

          <div className="item">
            <label>Role</label>
            <input type="number" placeholder="0" className="input" />
          </div>
          <div className="item">
            <label>Sessions</label>
            <input type="text" placeholder="course" className="input" />
          </div>
          <div className="item">
            <label>Courses</label>
            <input type="text" placeholder="sessions" className="input" />
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