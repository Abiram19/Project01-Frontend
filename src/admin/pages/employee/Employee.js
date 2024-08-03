import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./employee.css";
import { Link } from "react-router-dom";

export default function Employee() {
  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <Link to="/admin/newEmployee">
           <button className="employeeAddButton">Create</button>
        </Link>
      </div>
      <div className="employeeContainer">
        <div className="employeeShow">
          <div className="employeeShowTop">
            <img
              src="https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="employeeShowImg"
            />
            <div className="employeeShowTopTitle">
              <span className="employeeShowEmployeename">Gayan Reshra</span>
              <span className="employeeShowEmployeeTitle">Manager</span>
            </div>
          </div>
          <div className="employeeShowBottom">
            <span className="employeeShowTitle">Account Details</span>
            <div className="employeeShowInfo">
              <PermIdentity className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">gayan99</span>
            </div>

            <div className="employeeShowInfo">
              <CalendarToday className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">10.12.1983</span>
            </div>

            <span className="employeeShowTitle">Contact Details</span>
            <div className="employeeShowInfo">
              <PhoneAndroid className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">077 456 1234</span>
            </div>

            <div className="employeeShowInfo">
              <MailOutline className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">gayan@gmail.com</span>
            </div>

            <div className="employeeShowInfo">
              <LocationSearching className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Colombo, SriLanka</span>
            </div>

          </div>
        </div>
        <div className="employeeUpdate">
          <span className="employeeUpdateTitle">Edit</span>
          <form className="employeeUpdateForm">
              <div className="employeeUpdateLeft">
                <div className="employeeUpdateItem">
                  <label>Employeename</label>
                  <input type="text" placeholder="rayan99" className="employeeUpdateInput" />
                </div>

                <div className="employeeUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="Gayan Reshra" className="employeeUpdateInput" />
                </div>

                <div className="employeeUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="gayan@gmail.com" className="employeeUpdateInput" />
                </div>

                <div className="employeeUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="077 456 1234" className="employeeUpdateInput" />
                </div>

                <div className="employeeUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder="Colombo, SriLanka" className="employeeUpdateInput" />
                </div>

              </div>
              <div className="employeeUpdateRight">
                <div className="employeeUpdateUpload">
                  <img className="employeeUpdateImg" src="https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <label htmlFor="file"><Publish className="employeeUpdateIcon"/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="employeeUpdateButton">Update</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
