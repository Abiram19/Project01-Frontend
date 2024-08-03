import React from 'react';
import { Routes, Route } from "react-router-dom";
import AdminHome from '../admin/pages/home/AdminHome';
import Employee from '../admin/pages/employee/Employee';
import NewEmployee from '../admin/pages/newEmployee/NewEmployee';
import Sidebar from "../admin/components/sidebar/Sidebar";
import Topbar from '../admin/components/topbar/Topbar';
import EmployeesList from '../admin/pages/employeesList/EmployeesList';

import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AdminHome />} /> {/* Default route */}
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/employee/:employeeId" element={<Employee />} />
          <Route path="/newEmployee" element={<NewEmployee />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
