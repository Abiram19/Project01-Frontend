import "./newEmployee.css"

export default function NewEmployee() {
  return (
    <div className="newEmployee">
        <h1 className="newEmployeeTitle">New Employee</h1>
        <form className="newEmployeeForm">
            <div className="newEmployeeItem">
              <label>Employee Name</label>
              <input type="text" placeholder="john" />
            </div>
            <div className="newEmployeeItem">
              <label>Full Name</label>
              <input type="text" placeholder="John Dhurairaj" />
            </div>
            <div className="newEmployeeItem">
              <label>Email</label>
              <input type="email" placeholder="John@gmail.com" />
            </div>
            <div className="newEmployeeItem">
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className="newEmployeeItem">
              <label>Phone</label>
              <input type="text" placeholder="077 123 4567" />
            </div>
            <div className="newEmployeeItem">
              <label>Address</label>
              <input type="text" placeholder="Colombo,Srilanka" />
            </div>
            <div className="newEmployeeItem">
              <label>Gender</label>
              <div className="newEmployeeGender">
              <input type="radio" name="gender" id="male" value="male"/>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female"/>
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other"/>
              <label for="other">Other</label>
            </div>
            </div>
            <div className="newEmployeeItem">
                <label>Active</label>
                <select className="newEmployeeSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newEmployeeButton">Create</button>
        </form>
    </div>
  )
}
