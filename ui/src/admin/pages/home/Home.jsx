
import "./home.css";
import Chart from "../../components/chart/Chart";
import Users from "../../components/users/Users";
import { userData } from "../../dummyData";
import Topics from "../../components/topics/Topics";
import Status from "../../components/status/Status";

export default function Home() {

  return (
    <div className="home">
      <Users />
      <Chart data={userData} title="Annual Chart" grid dataKey="Active User"/>
      <div className="homeSections">
        <Topics/>
        <Status/>
      </div>
    </div>
  );
}