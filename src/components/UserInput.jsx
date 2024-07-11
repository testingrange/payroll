import UserInputField from "./UserInputField";

export default function UserInput({ employeeData,
     onEmployeeDataChange,
     onEmployeeDataSubmit,
     onShowDataClick
    }) {
  return (
    <section id="user-input">
        <div className="input-group">
            <UserInputField 
            label="First name" 
            name="fname" 
            type="text"
            value={employeeData.fname} 
            onChange={onEmployeeDataChange}
            required 
            />
            <UserInputField 
            label="Last name" 
            name="lname" 
            type="text"
            value={employeeData.lname} 
            onChange={onEmployeeDataChange}
            required 
            />
        </div>

        <div className="input-group">
            <UserInputField 
            label="Worked Hours" 
            name="whours" 
            type="number"
            value={employeeData.whours} 
            onChange={onEmployeeDataChange}
            required 
            />
            <UserInputField 
            label="Base salary" 
            name="bsalary" 
            type="number" 
            value={employeeData.bsalary}
            onChange={onEmployeeDataChange}
            required 
            />
        </div>

        <div className="input-group">
            <UserInputField 
            label="Date of birth" 
            name="dob" 
            type="date"
            value={employeeData.dob} 
            onChange={onEmployeeDataChange}
            required 
            />
            <UserInputField 
            label="SSN" 
            name="ssn" 
            type="text"
            value={employeeData.ssn} 
            required
            onChange={onEmployeeDataChange}
            maxlength="9"
            />
            <UserInputField 
            label="Email" 
            name="email" 
            type="email"
            value={employeeData.email} 
            onChange={onEmployeeDataChange}
            required 
            />
        </div>
        
        <button id="input-button" onClick={onEmployeeDataSubmit}>Submit</button>
        <button id="" onClick={onShowDataClick}>Show Data</button>


    
    </section>
  );
}
