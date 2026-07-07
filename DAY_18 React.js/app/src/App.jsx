import { useState } from "react";
import "./App.css";

function EmployeeCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "50px",
        margin: "10px",
      }}
    >
      <p>
        <strong>Name:</strong> {props.employeeName}
      </p>
      <p>
        <strong>ID:</strong> {props.employeeId}
      </p>
      <p>
        <strong>Department:</strong> {props.department}
      </p>
    </div>
  );
}

function App() {
  const [empname, setEmpName] = useState("");
  const [empid, setId] = useState("");
  const [empdept, setDept] = useState("");

  return (

    <div>
      <h2>Employee Details</h2>
        <label>Employee Name:</label>
        <input
          type="text"
          value={empname}
          onChange={(e) => setEmpName(e.target.value)}
          placeholder="Enter Employee Name"
        />

        <br></br>
        <br></br>

        <label>Employee ID:</label>
        <input
          type="text"
          value={empid}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter employee ID"
        />

        <br></br>
        <br></br>

        <label>Employee Department:</label>
        <input
          type="text"
          value={empdept}
          onChange={(e) => setDept(e.target.value)}
          placeholder="Enter employee Department"
        />
        <br></br>
        <br></br>


      <EmployeeCard
        employeeName={empname}
        employeeId={empid}
        department={empdept}
      />
    </div>
  );
}

export default App;