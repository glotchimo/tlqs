import "./topics.css";
// bring data from API we need class, topic and tutor name 
export default function Topics() {
  return (
    <div className="topics">

      <span className="title">Classes  </span>
      <span className="title">Topics</span>
      <span className="title">Tutor</span>




      <ul className="list">

        <li className="listItem">
          
          <div className="user">
            <span className="class">CSCD320</span>
          </div>

          <div className="user">
          <span className="topic">Time Comlixity</span>
          </div>
          <div className="user">
          <span className="tutor">Jessica Doner</span>
          </div>
          
        </li>

        
      </ul>
    </div>
  );
}