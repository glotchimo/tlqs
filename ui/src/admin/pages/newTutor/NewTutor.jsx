import "./newTutor.css";

export default function newTutor() {

  return (
    <div className="newTutor">
          <h1 className="newTutorTitle">New Tutor</h1>
          
      <form className="newTutorForm">

        
        <div className="newTutorItem">
          <label>Username</label>
          <input type="text" placeholder="username" />
        </div>

        <div className="newTutorItem">
          <label>Full Name</label>
          <input type="text" placeholder="First Last" />
        </div>


        <div className="newTutorItem">
          <label>Email</label>
          <input type="email" placeholder="username@ewu.edu" />
        </div>

        <div className="newTutorItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newTutorItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 000 000 0000" />
        </div>
       




        <div className="newTutorItem">
          <label>Active</label>

          <select className="newTutorSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

        </div>
        <button className="newTutorButton">Create</button>

      </form>
    </div>
  );
}
/*

WE NEED TO FETCH THE TUTORS TO API USING POST 
const data = { username: 'example' };

fetch('URL', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
*/