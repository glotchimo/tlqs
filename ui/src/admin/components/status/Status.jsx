import "./status.css";
export default function Status() {
  const Button = ({ type }) => {
    return <button className={"statusButton " + type}>{type}</button>;
  };
  return (
    <div className="status">
      <h3 className="title">Tutors Status</h3>
          <table className="table">
              
        <tr className="tr">
          <th className="th">Tutor</th>
          <th className="th">Date</th>
          <th className="th">Title</th>
          <th className="th">Status</th>
        </tr>

        <tr className="tr">
          <td className="user">
            <img
              src="https://sportslogohistory.com/wp-content/uploads/2019/05/eastern_washington_eagles_2000-pres-a.png"
              alt=""
              className="img"
            />
            <span className="name">Jessica Doner</span>
          </td>
          <td className="date">03 March 2022</td>
          <td className="id">CS</td>
          <td className="status">
            <Button type="active" />
          </td>
        </tr>
        

      </table>
    </div>
  );
}