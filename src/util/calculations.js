export function calculateEarnedIncome(employeesData) {
    console.log(employeesData)
    const updatedEmployeesData = []
    for (let i=0; i<employeesData.length; i++) {
        const earnedIncome = (+employeesData[i].bsalary)/12/160 * (+employeesData[i].whours)
        console.log(earnedIncome)
        updatedEmployeesData.push({
            dob:employeesData[i].dob,
            fname:employeesData[i].fname,
            lname:employeesData[i].lname,
            eim:earnedIncome
        })
    }
    return updatedEmployeesData
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });