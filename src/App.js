import Header from './components/Header'
import UserInput from './components/UserInput';
import Results from './components/Results'
import { useState } from 'react';

function App() {

  const [employeesDataSet, setEmployeesDataSet] = useState([])

  const [employeeData, setEmployeeData] = useState({
    fname: '',
    lname: '',
    whours: '',
    bsalary: '',
    dob: '',
    ssn: '',
    email: ''
  })

  const employeeDataHandle = (event) => {
    setEmployeeData(prevValues => {
      const updatedValues = {
        ...prevValues,
        [event.target.name]: event.target.value
      }
      // console.log(updatedValues)
      return updatedValues
    })
  }

  
  const employeesDataSetHandle = () => {
    setEmployeesDataSet(prevValues => [
        ...prevValues,
        employeeData
      ]
    )
  }

  const showDataHandle = () => {
    console.log(employeesDataSet)
  }


  return (
    <>
      <Header />
      <UserInput 
        employeeData={employeeData} 
        onEmployeeDataChange={employeeDataHandle} 
        onEmployeeDataSubmit={employeesDataSetHandle}
        onShowDataClick={showDataHandle}
        />
      <Results personnelData={employeesDataSet} />
    </>
  );
}

export default App;
