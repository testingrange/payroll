import { calculateEarnedIncome, formatter } from '../util/calculations'

export default function Results({ personnelData }) {
    const updatedEmployeesData = calculateEarnedIncome(personnelData)

  return (
    <table id="result">
      <thead>
        <tr>
          <th>DOB</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Earned Income per month</th>
        </tr>
      </thead>
      <tbody>
        {updatedEmployeesData.map((personData) => {
          return (
            <tr
              key={
                personData.dob[(0, 1)] +
                personData.fname[0] +
                personData.lname[0]
              }
            >
                <td>{personData.dob}</td>
                <td>{personData.fname}</td>
                <td>{personData.lname}</td>
                <td>{formatter.format(personData.eim)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
