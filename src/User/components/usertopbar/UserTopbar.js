import React, { useState, useEffect } from "react";
import "./usertopbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function UserTopbar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the username from the session or API
    const fetchUser = async () => {
      const response = await fetch("http://localhost/Project-01/Project01-Backend/getUser.php");
      const data = await response.json();
      setUsername(data.username);
      const username = sessionStorage.getItem("username");
      if (username) {
        setUsername(username);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost/Project-01/Project01-Backend/logout.php", { method: "POST" });
    window.location.href = "/LoginRegister"; // Redirect to login page
    sessionStorage.clear();
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AutoCare Lanka</span>
        </div>
        <div className="topRight">
          <div className="greeting">
            <span>Hi {username}, welcome!</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="dropdown">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="topAvatar"
              onClick={() => document.querySelector('.dropdown-content').classList.toggle('show')}
            />
            <div className="dropdown-content">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}