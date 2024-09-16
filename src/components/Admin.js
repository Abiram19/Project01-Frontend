import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../admin/pages/home/AdminHome";
import Employee from "../admin/pages/employee/Employee";
import NewEmployee from "../admin/pages/newEmployee/NewEmployee";
import Sidebar from "../admin/components/sidebar/Sidebar";
import Topbar from "../admin/components/topbar/Topbar";
import EmployeesList from "../admin/pages/employeesList/EmployeesList";
import BookingsList01 from "../admin/pages/bookingList/BookingList01";
import BookingsList02 from "../admin/pages/bookingList/BookingList02";
import BookingsList03 from "../admin/pages/bookingList/BookingList03";
import BookingsList04 from "../admin/pages/bookingList/BookingList04";
import MessagesList from "../admin/pages/messagesList/MessagesList";

import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  return (
    <>
      <Topbar />
      <div className="container_admin">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<AdminHome />} /> {/* Default route */}
            <Route path="/employees" element={<EmployeesList />} />
            <Route path="/employee/:employeeId" element={<Employee />} />
            <Route path="/newEmployee" element={<NewEmployee />} />
            <Route path="/bookingList01" element={<BookingsList01 />} />
            <Route path="/bookingList02" element={<BookingsList02 />} />
            <Route path="/bookingList03" element={<BookingsList03 />} />
            <Route path="/bookingList04" element={<BookingsList04 />} />
            <Route path="/messageList" element={<MessagesList />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
