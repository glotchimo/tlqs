import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">@Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
         
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://rlv.zcache.com/ewu_eagle_logo_poster-r9238a1d78fe24126ad2f040f5c0f1baa_wvk_8byvr_704.webp" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}