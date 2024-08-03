import "./usersidebar.css";
import {
  BookOnline,
  LineStyle,
  Timeline,
  TrendingUp,
  School,
  Work,
  ContactMail,
  Badge,
  SensorOccupied,
  People,
  AccountBox,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function UserSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Booking</h3>
          <ul className="sidebarList">
            <Link to="/User" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Book A Service
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Your Reservation</h3>
          <ul className="sidebarList">
            <Link to="/User/ReservationInfo" className="link">
              <li className="sidebarListItem">
                <BookOnline className="sidebarIcon" />
                Reservation Info
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
