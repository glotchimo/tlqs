import "./users.css";
// bring the total number of students from API and updating them in here and update the User number class value 
export default function Users() {
  return (
    <div className="users">


      <div className="usersItem">
        <span className="depName">Math</span>
        <div className="usersContainer">
          <span className="usersNumber" >41</span>
        </div>
      </div>
     
      
      <div className="usersItem">
        <span className="depName">CS</span>
        <div className="usersContainer">
          <span className="usersNumber">100</span>
        </div>
      </div>
      
    </div>
  );
}