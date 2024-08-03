import "./sidebar.css";
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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Bookings</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BookOnline className="sidebarIcon" />
              Station-01
            </li>
            <li className="sidebarListItem">
              <BookOnline className="sidebarIcon" />
              Station-02
            </li>
            <li className="sidebarListItem">
              <BookOnline className="sidebarIcon" />
              Station-03
            </li>
            <li className="sidebarListItem">
              <BookOnline className="sidebarIcon" />
              Station-04
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Applications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              Courses
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              Jobs
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ContactMail className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/admin/employees" className="link">
              <li className="sidebarListItem">
                <Badge className="sidebarIcon" />
                Employees
              </li>
            </Link>
            <li className="sidebarListItem">
              <SensorOccupied className="sidebarIcon" />
              Job Vacancies
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Customers</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              Customers
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AccountBox className="sidebarIcon" />
              Admin
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
