import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
} from "@material-ui/icons";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">


        <div className="sidebarMenu">

          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>

            
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>

          <ul className="sidebarList">
           
            <li className="sidebarListItem">
            <ExitToAppIcon className="sidebarIcon" />
                Logout
          </li>
          </ul>

        </div>

      </div>

    </div>
  );
}